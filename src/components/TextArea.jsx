import React from 'react';

// This is a forwardRef component for a textarea element
const TextArea = React.forwardRef(({ value, onChange, placeholder, className }, ref) => (
  <textarea
    ref={ref}
    className={`textarea-base ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
));

// Export the TextArea component
export default TextArea;