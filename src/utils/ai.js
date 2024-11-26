import axios from 'axios';

// Helper function to generate text using Claude
export const generateText = async (prompt, toolConfig) => {
  try {
    const response = await axios.post('/api/generate-text', {
      prompt,
      model: toolConfig.model,
      temperature: toolConfig.temperature,
      top_p: toolConfig.top_p,
      provider: toolConfig.provider
    });

    return response.data.text;
  } catch (error) {
    console.error('Error generating text:', error);
    throw new Error('Failed to generate text');
  }
};

// Helper function to generate images using Stable Diffusion
export const generateImage = async (prompt, toolConfig) => {
  try {
    const response = await axios.post('/api/generate-image', {
      prompt,
      model: toolConfig.model,
      steps: toolConfig.steps,
      cfg_scale: toolConfig.cfg_scale,
      seed: toolConfig.seed
    });

    return response.data.images;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }
};

// Helper function to process and upscale images
export const processImage = async (imageData, targetSize) => {
  try {
    const response = await axios.post('/api/process-image', {
      imageData,
      targetSize
    });

    return response.data.processedImage;
  } catch (error) {
    console.error('Error processing image:', error);
    throw new Error('Failed to process image');
  }
};