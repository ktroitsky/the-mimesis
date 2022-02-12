import * as React from 'react';
import { SVGProps, memo } from 'react';

const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m10 7-2 4h3v6H5v-6l2-4h3m8 0-2 4h3v6h-6v-6l2-4h3Z"
    />
  </svg>
);

export default memo(QuoteIcon);
