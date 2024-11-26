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
  required = false,
  pattern,
  options = [],
  rows = 4,
  disabled = false,
  maxLength,
  helperText,
  customStyles = {},
  onBlur,
  onFocus,
  icon,
  accept,
  multiple
}) => {
  const renderInputElement = () => {
    const commonProps = {
      name,
      value,
      onChange,
      disabled,
      onBlur,
      onFocus,
      className: `input-field ${className} ${error ? 'error' : ''}`
    };

    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={rows}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        );

      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'file':
        return (
          <div className="file-input-wrapper">
            <input
              {...commonProps}
              type="file"
              accept={accept}
              multiple={multiple}
            />
            <div className="file-input-label">
              {icon && <span className="file-icon">{icon}</span>}
              {placeholder || 'Choose file'}
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="search-input-wrapper">
            {icon && <span className="search-icon">{icon}</span>}
            <input
              {...commonProps}
              type="text"
              placeholder={placeholder}
            />
          </div>
        );

      case 'date':
        return (
          <input
            {...commonProps}
            type="date"
            placeholder={placeholder}
          />
        );

      default:
        return (
          <input
            {...commonProps}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            maxLength={maxLength}
          />
        );
    }
  };

  return (
    <div className="input-wrapper" style={customStyles}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {renderInputElement()}
      {helperText && <div className="helper-text">{helperText}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;