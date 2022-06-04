import MarkdownIn from 'markdown-it';
import MarkdownInAttrs from 'markdown-it-attrs';
import MarkdownBrackets from 'markdown-it-bracketed-spans';

const md = new MarkdownIn({ breaks: true, html: true })
  .use(MarkdownBrackets)
  .use(MarkdownInAttrs);

export default md;
