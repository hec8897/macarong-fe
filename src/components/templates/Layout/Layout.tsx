import React from 'react';
import type { LayoutProps } from './Layout.types';
import classNames from 'classnames';

export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="w-full min-h-screen">
      <div className={classNames('w-full mx-auto min-w-[360px] max-w-[600px] bg-white', className)}>
        {children}
      </div>
    </div>
  );
};
