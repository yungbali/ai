import React, { useState } from 'react';
import { generateImage } from '../utils/ai';
import { TOOLS } from '../config/tools';

const AlbumArtCreator = () => {
  const [formData, setFormData] = useState({
    albumTitle: '',
    styleDescription: '',
    mood: 'Energetic'
  });
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const moods = ['Energetic', 'Calm', 'Dark', 'Uplifting', 'Mysterious', 'Romantic'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadImage = async (imageUrl, filename) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const prompt = `Create professional album cover art:
        Title: ${formData.albumTitle}
        Style: ${formData.styleDescription}
        Mood: ${formData.mood}
        
        Important requirements:
        - Square format album cover
        - High quality, professional look
        - Clear focal point
        - Suitable for both digital and print
        - No text or typography (will be added later)
        - Strong visual impact`;

      const images = await generateImage(prompt, TOOLS["Album Art Creator"]);
      setGeneratedImages(images);
    } catch (error) {
      console.error('Error generating album art:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="album-art-creator">
      <h2>🎨 Album Art Creator</h2>
      <p className="tool-description">
        Generate unique album artwork for your music (1500x1500 pixels, will be upscaled).
      </p>

      <form onSubmit={handleSubmit} className="art-form">
        <div className="form-group">
          <label htmlFor="albumTitle">Album Title</label>
          <input
            type="text"
            id="albumTitle"
            name="albumTitle"
            value={formData.albumTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="styleDescription">Style Description</label>
          <textarea
            id="styleDescription"
            name="styleDescription"
            value={formData.styleDescription}
            onChange={handleInputChange}
            required
            rows={4}
            placeholder="Describe the visual style you want (e.g., minimalist, psychedelic, vintage)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mood">Mood</label>
          <select
            id="mood"
            name="mood"
            value={formData.mood}
            onChange={handleInputChange}
          >
            {moods.map(mood => (
              <option key={mood} value={mood}>{mood}</option>
            ))}
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Album Art'}
        </button>
      </form>

      {generatedImages.length > 0 && (
        <div className="generated-images">
          <h3>Generated Album Art</h3>
          <div className="images-grid">
            {generatedImages.map((image, index) => (
              <div key={index} className="image-container">
                <img 
                  src={image.url} 
                  alt={`Generated album art ${index + 1}`}
                />
                <div className="download-options">
                  <button onClick={() => downloadImage(image.original, 'original')}>
                    📥 Download Original (1024x1024)
                  </button>
                  <button onClick={() => downloadImage(image.upscaled, 'upscaled')}>
                    📥 Download Upscaled (3000x3000)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumArtCreator;