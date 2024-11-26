import React, { useState } from 'react';

const VerifyAccount = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Verify Account</h3>
        <p>Enter the code sent to your email</p>
      </div>

      <div className="otp-input-group">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="otp-input"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="onboarding-next-btn">
        <button className="btn-process">
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyAccount;