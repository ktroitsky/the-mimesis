import MarkdownIn from 'markdown-it';
import MarkdownInAttrs from 'markdown-it-attrs';

const md = new MarkdownIn().use(MarkdownInAttrs);

export default md;
