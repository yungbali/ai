import React, { useState } from 'react';
import { generateText } from '../utils/ai';
import { TOOLS } from '../config/tools';

const MarketingCopy = () => {
  const [formData, setFormData] = useState({
    releaseType: 'Single',
    releaseTitle: '',
    keyPoints: '',
    targetAudience: ''
  });
  const [generatedCopy, setGeneratedCopy] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const releaseTypes = ['Single', 'EP', 'Album'];

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
      const prompt = `Create marketing copy for:
        Type: ${formData.releaseType}
        Title: ${formData.releaseTitle}
        Key Points: ${formData.keyPoints}
        Target Audience: ${formData.targetAudience}
        
        Generate:
        1. Short description (50 words)
        2. Long description (200 words)
        3. Social media posts (3 variations)
        4. Email newsletter copy
        
        Make it engaging and compelling for the target audience.`;

      const response = await generateText(prompt, TOOLS["Marketing Copy Generator"]);
      setGeneratedCopy(response);
    } catch (error) {
      console.error('Error generating marketing copy:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedCopy], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.releaseTitle}_marketing_copy.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="marketing-copy">
      <h2>✍️ Marketing Copy Generator</h2>
      <p className="tool-description">
        Create compelling marketing copy for your music release.
      </p>

      <form onSubmit={handleSubmit} className="marketing-form">
        <div className="form-group">
          <label htmlFor="releaseType">Release Type</label>
          <select
            id="releaseType"
            name="releaseType"
            value={formData.releaseType}
            onChange={handleInputChange}
          >
            {releaseTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="releaseTitle">Release Title</label>
          <input
            type="text"
            id="releaseTitle"
            name="releaseTitle"
            value={formData.releaseTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="keyPoints">Key Selling Points</label>
          <textarea
            id="keyPoints"
            name="keyPoints"
            value={formData.keyPoints}
            onChange={handleInputChange}
            required
            rows={4}
            placeholder="What makes this release special?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="targetAudience">Target Audience</label>
          <input
            type="text"
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleInputChange}
            placeholder="Who is this release for?"
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Marketing Copy'}
        </button>
      </form>

      {generatedCopy && (
        <div className="generated-content">
          <h3>📝 Your Marketing Copy</h3>
          <div className="copy-preview">
            {generatedCopy.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <button 
            onClick={handleDownload}
            className="download-button"
          >
            📥 Download Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketingCopy;