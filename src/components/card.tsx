import React from 'react';
export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 border rounded shadow-md">
    {children}
  </div>
);
