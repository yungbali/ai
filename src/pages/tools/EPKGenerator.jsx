import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EPKGenerator = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    bio: '',
    achievements: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // API call would go here
      const response = await generateEPK(formData);
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="epk-generator-main">
      <div className="person_detail_main">
        <h2>Electronic Press Kit Generator</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="person_name"
              placeholder="Artist Name"
              value={formData.artistName}
              onChange={(e) => setFormData({...formData, artistName: e.target.value})}
            />
          </div>
          
          <div className="input-group">
            <input
              type="text"
              className="person_name"
              placeholder="Genre"
              value={formData.genre}
              onChange={(e) => setFormData({...formData, genre: e.target.value})}
            />
          </div>

          <textarea
            className="person_name"
            placeholder="Artist Bio"
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
          />

          <button 
            type="submit" 
            className="btn-process"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate EPK'}
          </button>
        </form>

        {result && (
          <div className="result-section">
            <h3>Your EPK</h3>
            <div className="epk-content">
              {result}
            </div>
            <button 
              onClick={() => downloadEPK(result)}
              className="btn-process"
            >
              Download EPK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EPKGenerator;