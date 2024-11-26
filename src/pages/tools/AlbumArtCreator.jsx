import React, { useState } from 'react';
import Button from '../../components/shared/Button';

const AlbumArtCreator = () => {
  const [formData, setFormData] = useState({
    albumTitle: '',
    styleDescription: '',
    mood: 'Energetic'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // API call would go here
    setLoading(false);
  };

  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Album Art Creator</h3>
        <p>Generate unique album artwork for your music</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="person_name"
          placeholder="Album Title"
          value={formData.albumTitle}
          onChange={(e) => setFormData({...formData, albumTitle: e.target.value})}
        />

        <textarea
          className="feedback-sec-txt"
          placeholder="Style Description"
          value={formData.styleDescription}
          onChange={(e) => setFormData({...formData, styleDescription: e.target.value})}
        />

        <select 
          className="person_name"
          value={formData.mood}
          onChange={(e) => setFormData({...formData, mood: e.target.value})}
        >
          <option value="Energetic">Energetic</option>
          <option value="Peaceful">Peaceful</option>
          <option value="Dark">Dark</option>
          <option value="Joyful">Joyful</option>
        </select>

        <div className="onboarding-next-btn">
          <Button loading={loading}>
            Generate Album Art
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AlbumArtCreator;