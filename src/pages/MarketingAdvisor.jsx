import React, { useState } from 'react';
import { generateText } from '../utils/ai';
import { TOOLS } from '../config/tools';

const MarketingAdvisor = () => {
  const [formData, setFormData] = useState({
    projectDescription: '',
    currentFollowing: '',
    budget: '$0-$100',
    goals: ''
  });
  const [generatedAdvice, setGeneratedAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const budgetRanges = [
    '$0-$100',
    '$100-$500',
    '$500-$1000',
    '$1000+'
  ];

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
      const prompt = `Provide marketing strategy advice for:
        Project: ${formData.projectDescription}
        Current Following: ${formData.currentFollowing}
        Budget: ${formData.budget}
        Goals: ${formData.goals}
        
        Include:
        1. Overall Strategy
        2. Platform-specific tactics
        3. Budget allocation suggestions
        4. Timeline recommendations
        5. Key performance indicators
        6. Potential challenges and solutions
        
        Make it practical and actionable within the given budget.`;

      const response = await generateText(prompt, TOOLS["Marketing Advisor"]);
      setGeneratedAdvice(response);
    } catch (error) {
      console.error('Error generating marketing advice:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedAdvice], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'marketing_strategy.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="marketing-advisor">
      <h2>💡 Marketing Advisor</h2>
      <p className="tool-description">
        Get personalized marketing strategy advice.
      </p>

      <form onSubmit={handleSubmit} className="advisor-form">
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            required
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentFollowing">Current Following</label>
          <input
            type="text"
            id="currentFollowing"
            name="currentFollowing"
            value={formData.currentFollowing}
            onChange={handleInputChange}
            placeholder="e.g., Instagram: 1000, Spotify: 500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Marketing Budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
          >
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="goals">Marketing Goals</label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            required
            rows={4}
            placeholder="What do you want to achieve?"
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Get Marketing Advice'}
        </button>
      </form>

      {generatedAdvice && (
        <div className="generated-content">
          <h3>📊 Your Marketing Strategy</h3>
          <div className="advice-preview">
            {generatedAdvice.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <button 
            onClick={handleDownload}
            className="download-button"
          >
            📥 Download Strategy
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketingAdvisor;