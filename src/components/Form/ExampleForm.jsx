import React, { useState } from 'react';
import Input from '../shared/Input/Input';
import { validateInput } from '../../utils/validation';

const ExampleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    const error = validateInput(value, name);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <form>
      <Input
        type="text"
        name="name"
        label="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        helperText="Enter your full name as it appears on official documents"
      />

      <Input
        type="email"
        name="email"
        label="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        type="select"
        name="category"
        label="Category"
        value={formData.category}
        onChange={handleChange}
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'support', label: 'Technical Support' },
          { value: 'billing', label: 'Billing Question' }
        ]}
      />

      <Input
        type="textarea"
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        helperText="Maximum 500 characters"
        maxLength={500}
      />
    </form>
  );
};

export default ExampleForm;