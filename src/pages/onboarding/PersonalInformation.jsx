import React, { useState } from 'react';
import Input from '../../components/shared/Input';

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Personal Information</h3>
        <p className="sub-text">Please fill your details</p>
      </div>

      <Input
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
      />

      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />

      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />

      <div className="onboarding-next-btn">
        <button className="btn-process">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;