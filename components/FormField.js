// components/FormField.js
import React from 'react';

const FormField = ({ name, value, onChange, type, placeholder }) => {
  return type === 'textarea' ? (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  ) : (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default FormField;
