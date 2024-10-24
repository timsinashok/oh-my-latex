import React from 'react';

const TextArea = React.forwardRef(({ value, onChange, placeholder, className }, ref) => (
  <textarea
    ref={ref}
    className={`textarea-base ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
));

export default TextArea;