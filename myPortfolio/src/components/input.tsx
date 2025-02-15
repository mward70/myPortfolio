import React from 'react';
export const Input: React.FC<{ placeholder?: string; type?: string; onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void }> = ({ placeholder, type = 'text', onBlur }) => (
  <input className="w-full p-2 border rounded" type={type} placeholder={placeholder} onBlur={onBlur} />
);