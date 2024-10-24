import React from 'react';

// ErrorAlert component
const ErrorAlert = ({ message, onDismiss }) => (
  <div className="error-alert">
    <span className="block sm:inline">{message}</span>
    <button
      className="absolute top-0 bottom-0 right-0 px-4 py-3"
      onClick={onDismiss}
    >
      ×
    </button>
  </div>
);


// Export the ErrorAlert component
export default ErrorAlert;