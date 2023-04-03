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
      locale
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
    const { slug, locale } = node;
    acc[locale === 'en' ? slug : `uk/${slug}`] = node;

    return acc;
  }, {});

  return allPages.map((page) => {
    return { ...page, ...nodeMap[page.path.slice(1, -1)] };
  });
};

module.exports = { serialize, sitemapQuery, resolvePages };
