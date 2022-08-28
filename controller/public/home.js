var layout = require("./myController");
var product = require("../../model/productModel");

async function index(req, res) {
  let page = req.query.page ? req.query.page : 1;
 
  let limit = 8;
  let offset = (page - 1) * limit;
  let data = [];
  // lấy dữ liệu sản phẩm trảng chủ ở đây
  data = await product.getProducts(limit, offset);
  layout.render(res, "home", {
    products: data,
    page: page,
    limit: limit,
  });
}

module.exports = {
  index: index,
};
