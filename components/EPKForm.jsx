// ... existing imports and initial state ...

const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      if (name === 'musicFiles') {
        // Handle multiple files
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
      // Handle social links
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
      {/* ... existing inputs ... */}

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