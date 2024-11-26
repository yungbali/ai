const { InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");
const sharp = require('sharp');

// Helper function to invoke Bedrock model
const invokeModel = async (bedrock, modelId, body) => {
  const command = new InvokeModelCommand({
    modelId,
    body: JSON.stringify(body),
    contentType: "application/json",
    accept: "application/json",
  });

  const response = await bedrock.send(command);
  const responseBody = JSON.parse(new TextDecoder().decode(response.body));
  return responseBody;
};

exports.generateText = async (req, res) => {
  try {
    const { prompt, model, temperature, top_p, provider } = req.body;
    const bedrock = req.app.locals.bedrock;

    let body;
    if (provider === 'anthropic') {
      body = {
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 4096,
        messages: [
          { role: "user", content: prompt }
        ],
        temperature,
        top_p
      };
    }

    const response = await invokeModel(bedrock, model, body);
    res.json({ text: response.content[0].text });
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Failed to generate text' });
  }
};

exports.generateImage = async (req, res) => {
  try {
    const { prompt, model, steps, cfg_scale, seed } = req.body;
    const bedrock = req.app.locals.bedrock;

    const body = {
      text_prompts: [{ text: prompt, weight: 1.0 }],
      cfg_scale,
      steps,
      seed,
      width: 1024,
      height: 1024,
      samples: 1,
      style_preset: "photographic"
    };

    const response = await invokeModel(bedrock, model, body);
    
    const images = response.artifacts.map(artifact => ({
      original: artifact.base64,
      upscaled: null // Will be processed in the next step
    }));

    // Process images for upscaling
    for (let i = 0; i < images.length; i++) {
      const upscaled = await processImageBuffer(
        Buffer.from(images[i].original, 'base64'),
        3000
      );
      images[i].upscaled = upscaled.toString('base64');
    }

    res.json({ images });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
};

exports.processImage = async (req, res) => {
  try {
    const { imageData, targetSize } = req.body;
    const imageBuffer = Buffer.from(imageData, 'base64');
    
    const processedImage = await processImageBuffer(imageBuffer, targetSize);
    
    res.json({ 
      processedImage: processedImage.toString('base64') 
    });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};

// Helper function to process image buffer
async function processImageBuffer(buffer, targetSize) {
  return await sharp(buffer)
    .resize(targetSize, targetSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
}