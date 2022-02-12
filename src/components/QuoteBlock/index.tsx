import classNames from 'classnames';
import React, { CSSProperties, useMemo } from 'react';
import QuoteIcon from '../../icons/QuoteIcon';
import { QuoteType } from '../../types/queryTypes';
import Text from '../Text';
import Markdown from '../Text/Markdown';
import TMLink from '../TMLink/TMLink';
import './style.scss';

interface QuoteBlockProps extends Partial<QuoteType> {
  backgroundColor?: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({
  backgroundColor = 'rgba(0,0,0,0.05)',
  authorLink,
  author,
  body,
}) => {
  const containerStyle = useMemo<CSSProperties>(
    () => ({ backgroundColor }),
    [backgroundColor]
  );

  const Author = useMemo(
    () =>
      authorLink ? (
        <TMLink href={authorLink} className="author-caption__link">
          <Text className="author-caption">{author}</Text>
        </TMLink>
      ) : (
        <Text className="author-caption">{author}</Text>
      ),
    [author, authorLink]
  );

  return (
    <div
      className={classNames('quote-block', { 'quote-block_no-content': !body })}
      style={containerStyle}
    >
      <QuoteIcon />
      <Markdown source={body ?? ''} />
      {Author}
    </div>
  );
};

export default React.memo(QuoteBlock);
