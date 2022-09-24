var layout = require("./myController");
var productCate = require("../../model/productcateModel");
var productModel = require("../../model/productModel");
// var productDetail = require("../../model/productDetailsModel");

async function getCategories(req, res, next) {
  // req.params.id id danh mục mục
  var id = req.params.id;
  let page = req.query.page ? req.query.page : 1;

  let limit = 6;
  let offset = (page - 1) * limit;
  let data = [];
  if (id == "bestsale") {
    data = await productModel.getBestsale(limit, offset);
  } else if (id == "topsale") {
    data = await productModel.getTopsale(limit, offset);
  } else {
    data = await productCate.getProductCategories(id, limit, offset);
  }
  layout.render(res, "product/category", {
    productCates: data,
    category_id: id,
    page: page,
    limit: limit,
  });
}
async function getProductDetail(req, res,next) {
  var id = req.params.id;
  let productDetails = await productModel.getDetail(id);
  layout.render(res, "product/product_details", {
    productDetails: productDetails,
  });
}

module.exports = {
  getCategories: getCategories,
  getProductDetail: getProductDetail,
};
