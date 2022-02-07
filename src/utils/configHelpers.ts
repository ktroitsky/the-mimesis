const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const staticDate = '2022-02-07';

export const sitemapQuery = `
{
  allSitePage {
    nodes {
      path
    }
  }
  site {
    siteMetadata {
      siteUrl
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

export const serialize = ({ site, allSitePage, allContentfulArticle }) => {
  return allSitePage.nodes.map(({ path }: { path: string }) => {
    const url = site.siteMetadata.siteUrl + path;

    const isHome = path === '/';
    const article = allContentfulArticle.nodes.find(
      ({ slug }) => slug === path.slice(1, -1)
    );

    return {
      url,
      changefreq: isHome || article ? 'daily' : 'weekly',
      lastmod: isHome
        ? formatDate(new Date())
        : article
        ? article.updatedAt
        : staticDate,
      priority: isHome ? 0.9 : article ? 0.7 : 0.5,
    };
  });
};
