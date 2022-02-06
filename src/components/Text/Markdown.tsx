import React from 'react';
import { useMemo } from 'react';
import md from '../../utils/md';
import './style.scss';

type MarkdownProps = {
  className?: string;
  source: string;
};

const Markdown: React.FC<MarkdownProps> = ({ source, className }) => {
  const html = useMemo<
    React.DOMAttributes<HTMLDivElement>['dangerouslySetInnerHTML']
  >(() => ({ __html: md.render(source) }), [source]);

  return <div className={className} dangerouslySetInnerHTML={html} />;
};

export default React.memo(Markdown);
