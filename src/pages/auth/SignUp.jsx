import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Create Account</h3>
      </div>

      <input
        type="email"
        className="person_name"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />

      <input
        type="password"
        className="person_name"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />

      <input
        type="password"
        className="person_name"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
      />

      <div className="onboarding-next-btn">
        <button className="btn-process">
          Sign Up
        </button>
      </div>

      <div className="sign-in-bottom">
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;