import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

export type TMLinkProps = {
  href: string;
  className?: string;
};

const TMLink: React.FC<React.PropsWithChildren<TMLinkProps>> = ({
  children,
  href,
  className,
}) => {
  return (
    <Link className={`${className}`} to={href}>
      {children}
    </Link>
  );
};

export default React.memo(TMLink);
