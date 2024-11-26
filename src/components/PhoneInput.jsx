import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent = ({ value, onChange }) => {
  return (
    <div className="person_detail_main">
      <PhoneInput
        country={'us'}
        value={value}
        onChange={onChange}
        containerClass="intl-tel-input"
        inputClass="person_name"
        buttonClass="selected-flag"
      />
    </div>
  );
};

export default PhoneInputComponent;