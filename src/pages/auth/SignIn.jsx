import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/shared/Input';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Here you would typically make an API call to your auth endpoint
        // For example:
        // const response = await authService.signIn(formData);
        
        console.log('Sign in successful', formData);
        // Store token in localStorage or context
        // localStorage.setItem('token', response.token);
        
        // Redirect to dashboard or home page
        navigate('/dashboard');
      } catch (error) {
        setErrors({
          submit: 'Invalid email or password'
        });
        console.error('Sign in failed:', error);
      }
    }
  };

  const isFormValid = formData.email && 
                     formData.password && 
                     Object.keys(errors).length === 0;

  return (
    <div className="person_detail_main">
      <form onSubmit={handleSubmit} noValidate>
        <div className="formDescription">
          <h3>Sign In</h3>
        </div>

        <div className="form-group">
          <Input
            type="email"
            name="email"
            className={`person_name ${errors.email ? 'error' : ''}`}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            name="password"
            className={`person_name ${errors.password ? 'error' : ''}`}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        {errors.submit && (
          <div className="error-message">{errors.submit}</div>
        )}

        <div className="onboarding-next-btn">
          <button 
            type="submit"
            className={`btn-process ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;