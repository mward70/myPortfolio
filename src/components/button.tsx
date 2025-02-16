import React from 'react';
export const Button: React.FC<{ onClick?: () => void; className?: string; children: React.ReactNode }> = ({ onClick, className, children }) => (
  <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
);