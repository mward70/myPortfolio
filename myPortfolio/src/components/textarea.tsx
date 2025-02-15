import React from 'react';
export const Textarea: React.FC<{ placeholder?: string; onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void }> = ({ placeholder, onBlur }) => (
  <textarea className="w-full p-2 border rounded" placeholder={placeholder} onBlur={onBlur} />
);