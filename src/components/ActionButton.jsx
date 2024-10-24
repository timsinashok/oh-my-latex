import React from 'react';

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

export default ActionButton;