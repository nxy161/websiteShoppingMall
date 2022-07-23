var banner = require("../../model/bannerModel");
var baseUrl = "http://localhost:3000/";
var categorie = require("../../model/categoriesModel");
var productCate = require("../../model/productcateModel");
async function renderView(res, view, data = {}) {
  let tmp = {
    view: view,
    data: data,
  };

  let categories = await categorie.getCategories();
  if (categories && categories.length > 0) {
    tmp.data.categories = categories;
  }

  let banners = await banner.getBanner();
  if (banners && banners.length > 0) {
    tmp.data.banners = banners;
  }

  tmp.data.baseUrl = baseUrl;
  res.render("public/index", tmp);
}

function renderEmpty(res, view, data = {}) {
  res.render(view, tmp);
}

module.exports = {
  render: renderView,
  renderEmpty: renderEmpty,
};
