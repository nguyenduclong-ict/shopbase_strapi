function getModel(name, plugin) {
  return strapi.query(name, plugin).model;
}

function updateOrCreate() {}

module.exports = {
  getModel,
};
