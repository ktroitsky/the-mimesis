exports.createPages = async ({ actions }) => {};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const replacePath = page.path.replace('/en', '');

  deletePage(page);
  createPage({
    ...page,
    path: replacePath,
  });
};
