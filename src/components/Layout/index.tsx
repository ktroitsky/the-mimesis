import React, { PropsWithChildren } from 'react';
import './style.scss';

const Layout: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <div className={`layout ${className}`}>{children}</div>;
};

export default Layout;
