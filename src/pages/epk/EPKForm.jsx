import React, { useState } from 'react';
import Input from '../../components/shared/Input/Input';

const EPKForm = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    bio: '',
    coverImage: null,
    musicFiles: [],
    socialLinks: {
      spotify: '',
      instagram: '',
      youtube: ''
    }
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      if (name === 'musicFiles') {
        setFormData(prev => ({
          ...prev,
          [name]: Array.from(files)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: files[0]
        }));
      }
    } else if (name.startsWith('social.')) {
      const socialPlatform = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialPlatform]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form className="epk-form">
      <Input
        type="text"
        name="artistName"
        label="Artist Name"
        required
        value={formData.artistName}
        onChange={handleChange}
        placeholder="Enter artist name"
      />

      <Input
        type="select"
        name="genre"
        label="Genre"
        required
        value={formData.genre}
        onChange={handleChange}
        options={[
          { value: 'rock', label: 'Rock' },
          { value: 'pop', label: 'Pop' },
          { value: 'hiphop', label: 'Hip Hop' },
          { value: 'electronic', label: 'Electronic' }
        ]}
      />

      <Input
        type="textarea"
        name="bio"
        label="Artist Bio"
        required
        value={formData.bio}
        onChange={handleChange}
        placeholder="Write your artist bio..."
        rows={6}
      />

      <Input
        type="file"
        name="coverImage"
        label="Cover Image"
        accept="image/*"
        onChange={handleChange}
        icon="📷"
        helperText="Upload a high-quality image (JPG, PNG)"
      />

      <Input
        type="file"
        name="musicFiles"
        label="Music Files"
        accept="audio/*"
        multiple
        onChange={handleChange}
        icon="🎵"
        helperText="Upload your music files (MP3, WAV)"
      />

      <Input
        type="url"
        name="social.spotify"
        label="Spotify Profile URL"
        value={formData.socialLinks.spotify}
        onChange={handleChange}
        placeholder="https://open.spotify.com/artist/..."
        icon="🎧"
      />

      <Input
        type="url"
        name="social.instagram"
        label="Instagram Profile URL"
        value={formData.socialLinks.instagram}
        onChange={handleChange}
        placeholder="https://instagram.com/..."
        icon="📸"
      />

      <Input
        type="url"
        name="social.youtube"
        label="YouTube Channel URL"
        value={formData.socialLinks.youtube}
        onChange={handleChange}
        placeholder="https://youtube.com/..."
        icon="▶️"
      />
    </form>
  );
};

export default EPKForm;