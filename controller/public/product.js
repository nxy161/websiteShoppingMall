var layout = require("./myController");
var productCate = require("../../model/productcateModel");
var productModel = require("../../model/productModel");
var productDetail = require("../../model/productDetailsModel");
async function getCategories(req, res, next) {
  // req.params.id id danh mục mục
  var id = req.params.id;
  let productCates = await productCate.getProductCategories(id);
  layout.render(res, "product/category", {
    productCates: productCates,
  });
}
async function getProductDetail(req,res){
  var id = req.params.id;
    let productDetails = await productModel.getDetail(id);
    layout.render(res, "product/product_details",{
      productDetails: productDetails,
    });
}
module.exports = {
  getCategories: getCategories,
  getProductDetail: getProductDetail,
};
