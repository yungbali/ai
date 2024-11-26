export const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s-]{10,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  };
  
  export const validateInput = (value, type, required = false) => {
    if (!value && required) {
      return 'This field is required';
    }
  
    if (!value) return '';
  
    switch (type) {
      case 'email':
        return patterns.email.test(value) ? '' : 'Invalid email address';
      case 'phone':
        return patterns.phone.test(value) ? '' : 'Invalid phone number';
      case 'password':
        return patterns.password.test(value) 
          ? '' 
          : 'Password must be at least 8 characters with letters and numbers';
      case 'url':
        return patterns.url.test(value) ? '' : 'Invalid URL';
      default:
        return '';
    }
  };