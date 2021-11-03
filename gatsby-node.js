const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const productTemplate = path.resolve(`./src/templates/component.tsx`);

  const data = ["jersey", "clothes"];
  const subData = {
    textile: ["blankets", "linens", "mattresses", "pillows"],
    overalls: ["jackets", "military-clothes", "trousers"],
  };

  let categories = Object.keys(subData);

  for (let category of categories) {
    subData[category].forEach((node) => {
      createPage({
        path: `/catalog/${category}/${node}`,
        component: productTemplate,
        context: {
          node,
        },
      });
    });
  }

  data.forEach((node) => {
    createPage({
      path: `/catalog/${node}`,
      component: productTemplate,
      context: {
        node,
      },
    });
  });
};
