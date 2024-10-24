import React from 'react';

// This is a button component that accepts an icon, text, onClick function, and disabled prop
const ActionButton = ({ icon: Icon, text, onClick, disabled }) => (
  <button
    className="button-secondary"
    onClick={onClick}
    disabled={disabled}
  >
    <Icon className="w-4 h-4 inline-block mr-2" />
    {text}
  </button>
);

// Export the ActionButton component
export default ActionButton;