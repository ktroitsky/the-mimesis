const sitemapQuery = `
{
  allSitePage {
    nodes {
      path
    }
  }

  allContentfulArticle {
    nodes {
      updatedAt
      slug
    }
  }
}
`;

const serialize = ({ path, updatedAt }) => {
  const isHome = path === '/';

  return {
    url: path,
    lastmod: updatedAt,
    changefreq: isHome || updatedAt ? 'daily' : 'weekly',
    priority: isHome ? 0.9 : updatedAt ? 0.7 : 0.5,
  };
};

const resolvePages = ({
  allSitePage: { nodes: allPages },
  allContentfulArticle: { nodes: allArticles },
}) => {
  const nodeMap = allArticles.reduce((acc, node) => {
    const { slug } = node;
    acc[slug] = node;

    return acc;
  }, {});

  return allPages.map((page) => {
    return { ...page, ...nodeMap[page.path.slice(1, -1)] };
  });
};

module.exports = { serialize, sitemapQuery, resolvePages };
