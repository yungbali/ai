import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/shared/Input';
import './CreateNewPassword.scss';

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password)
    };

    return requirements;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requirements = validatePassword(formData.password);

    if (!Object.values(requirements).every(Boolean)) {
      newErrors.password = 'Password does not meet all requirements';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, proceed with password update
    // Add your API call here
    navigate('/login'); // or wherever you want to redirect after success
  };

  return (
    <div className="create-password-container">
      <h1>Create New Password</h1>
      <p className="subtitle">Choose a strong password to secure your account</p>

      <form onSubmit={handleSubmit}>
        <div className="password-requirements">
          <h3>Password Requirements:</h3>
          <ul>
            <li className={validatePassword(formData.password).length ? 'met' : ''}>
              At least 8 characters long
            </li>
            <li className={validatePassword(formData.password).uppercase ? 'met' : ''}>
              Include uppercase letters
            </li>
            <li className={validatePassword(formData.password).lowercase ? 'met' : ''}>
              Include lowercase letters
            </li>
            <li className={validatePassword(formData.password).number ? 'met' : ''}>
              Include at least one number
            </li>
            <li className={validatePassword(formData.password).special ? 'met' : ''}>
              Include at least one special character
            </li>
          </ul>
        </div>

        <Input
          type="password"
          label="New Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />

        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          required
        />

        <button type="submit" className="button-primary">
          Create Password
        </button>
      </form>
    </div>
  );
};

export default CreateNewPassword;