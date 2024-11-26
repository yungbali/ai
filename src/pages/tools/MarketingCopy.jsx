import React, { useState } from 'react';
import Button from '../../components/shared/Button';

const MarketingCopy = () => {
  const [formData, setFormData] = useState({
    releaseType: 'Single',
    releaseTitle: '',
    keyPoints: '',
    targetAudience: ''
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Marketing Copy Generator</h3>
        <p>Create compelling marketing copy for your music release</p>
      </div>

      <select 
        className="person_name"
        value={formData.releaseType}
        onChange={(e) => setFormData({...formData, releaseType: e.target.value})}
      >
        <option value="Single">Single</option>
        <option value="EP">EP</option>
        <option value="Album">Album</option>
      </select>

      <input
        type="text"
        className="person_name"
        placeholder="Release Title"
        value={formData.releaseTitle}
        onChange={(e) => setFormData({...formData, releaseTitle: e.target.value})}
      />

      <textarea
        className="feedback-sec-txt"
        placeholder="Key Selling Points"
        value={formData.keyPoints}
        onChange={(e) => setFormData({...formData, keyPoints: e.target.value})}
      />

      <div className="onboarding-next-btn">
        <Button loading={loading}>
          Generate Marketing Copy
        </Button>
      </div>
    </div>
  );
};

export default MarketingCopy;