import classNames from 'classnames';
import React, { useMemo } from 'react';
import './style.scss';

type TextProps = {
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  fontFamily?: 'lora' | 'spartan';
  fontWeight?: '400' | '700';
  className?: string;
  color?: 'dark' | 'light' | 'caption';
};

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  type = 'p',
  children,
  className,
  fontFamily,
  fontWeight = '400',
  color = 'dark',
}) => {
  const extendedClassNames = useMemo(
    () => classNames(fontFamily, className, `weight-${fontWeight}`, color),
    [className, color, fontFamily, fontWeight]
  );

  switch (type) {
    case 'p':
      return <p className={extendedClassNames}>{children}</p>;
    case 'h1':
      return <h1 className={extendedClassNames}>{children}</h1>;
    case 'h2':
      return <h2 className={extendedClassNames}>{children}</h2>;
    case 'h3':
      return <h3 className={extendedClassNames}>{children}</h3>;
    case 'h4':
      return <h4 className={extendedClassNames}>{children}</h4>;
    default:
      return <p className={extendedClassNames}>{children}</p>;
  }
};

export default React.memo(Text);
