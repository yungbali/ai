import React, { useState } from 'react';
import { generateText } from '../utils/ai';
import { TOOLS } from '../config/tools';

const EPKGenerator = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    bio: '',
    achievements: ''
  });
  const [generatedEPK, setGeneratedEPK] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const prompt = `Create a professional Electronic Press Kit for:
        Artist: ${formData.artistName}
        Genre: ${formData.genre}
        Bio: ${formData.bio}
        Achievements: ${formData.achievements}
        
        Format the EPK with these sections:
        1. Artist Overview
        2. Biography
        3. Music Description
        4. Achievements & Press
        5. Contact Information (placeholder)
        
        Make it engaging and professional, highlighting the artist's unique qualities.`;

      const response = await generateText(prompt, TOOLS["EPK Generator"]);
      setGeneratedEPK(response);
    } catch (error) {
      console.error('Error generating EPK:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedEPK], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.artistName}_EPK.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="epk-generator">
      <h2>📋 Electronic Press Kit Generator</h2>
      <p className="tool-description">
        Create a professional EPK for your music project.
      </p>

      <form onSubmit={handleSubmit} className="epk-form">
        <div className="form-group">
          <label htmlFor="artistName">Artist Name</label>
          <input
            type="text"
            id="artistName"
            name="artistName"
            value={formData.artistName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Artist Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            required
            rows={5}
          />
        </div>

        <div className="form-group">
          <label htmlFor="achievements">Notable Achievements</label>
          <textarea
            id="achievements"
            name="achievements"
            value={formData.achievements}
            onChange={handleInputChange}
            rows={3}
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate EPK'}
        </button>
      </form>

      {generatedEPK && (
        <div className="generated-content">
          <h3>📄 Your Generated EPK</h3>
          <div className="epk-preview">
            {generatedEPK.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <button 
            onClick={handleDownload}
            className="download-button"
          >
            📥 Download EPK
          </button>
        </div>
      )}
    </div>
  );
};

export default EPKGenerator;