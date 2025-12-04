import React from 'react';
import type { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="w-full min-h-screen">
      <div className={`w-full mx-auto min-w-[360px] max-w-[600px] bg-white ${className}`}>
        {children}
      </div>
    </div>
  );
};
