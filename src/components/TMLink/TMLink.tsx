import { Link } from 'gatsby-plugin-react-i18next';
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
    // @ts-expect-error
    <Link className={`${className}`} to={href}>
      {children}
    </Link>
  );
};

export default React.memo(TMLink);
