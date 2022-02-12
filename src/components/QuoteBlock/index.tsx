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
  autorLink,
  author,
  body,
}) => {
  const containerStyle = useMemo<CSSProperties>(
    () => ({ backgroundColor }),
    [backgroundColor]
  );

  const Author = useMemo(
    () =>
      autorLink ? (
        <TMLink href={autorLink}>
          <Text className="quote-block__author">{author}</Text>
        </TMLink>
      ) : (
        <Text className="quote-block__author">{author}</Text>
      ),
    [author, autorLink]
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
