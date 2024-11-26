// Notification system based on Lobibox
export const showNotification = (type, message) => {
    const notificationClass = `notification notification-${type}`;
    const notification = document.createElement('div');
    notification.className = notificationClass;
    notification.innerHTML = `
      <div class="notification-icon">
        <i class="ri-notification-line"></i>
      </div>
      <div class="notification-content">
        <p>${message}</p>
      </div>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };
  
  // Form validation utility
  export const validateForm = (formData) => {
    const errors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        errors[key] = 'This field is required';
      }
    });
    return errors;
  };