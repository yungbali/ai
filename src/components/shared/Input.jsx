import React from 'react';
import './Input.scss';

const Input = ({
  type = 'text',
  name,
  className,
  placeholder,
  value,
  onChange,
  error,
  label,
  required = false
}) => {
  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        className={`input-field ${className} ${error ? 'error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;