import React, { useState } from 'react';
import Input from '../../components/shared/Input';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Forgot Password</h3>
        <p className="sub-text">Enter your email to reset password</p>
      </div>

      <Input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="onboarding-next-btn">
        <button className="btn-process">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;