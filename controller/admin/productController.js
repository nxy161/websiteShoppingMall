var layout = require("./myController");
var listProducts = require("../../model/productModel");
var categoryModel = require("../../model/categoriesModel");
var productIMGModel = require("../../model/productImagesModel");
async function getlist(req, res, next) {
  let data = [];
  var id = req.params.id;
  let page = req.query.page ? req.query.page : 1;
  let limit = 6;
  let offset = (page - 1) * limit;

  let find = req.query.find ? req.query.find : "";
  data = await listProducts.getlist(limit, offset, find);
  layout.render(res, "product/list", {
    listProduct: data,
    id: id,
    page: page,
    limit: limit,
    find: find,
  });
}
async function deleteProduct(req, res) {
  var id = req.params.id;
  let result = await listProducts.deleteProduct(id);
  res.redirect("/admin/product");
}
async function getProductEdit(req, res, next) {
  var id = req.params.id;
  let data = [];
  data = await listProducts.getProductEdit(id);
  let categories = await categoryModel.getCategories();
  layout.render(res, "product/edit", {
    productEdit: data,
    categories: categories,
  });
}
async function editProduct(req, res, next) {
  let product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    cate: req.body.cate,
    active: req.body.active,
  };
  let data = await listProducts.editProduct(product);
  res.redirect("/admin/product");
}
async function getPage(req, res, next) {
  let categories = await categoryModel.getCategories();
  layout.render(res, "product/add", {
    categories: categories,
  });
}
async function insertProduct(req, res, next) {
  let product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    cate: req.body.cate,
    active: req.body.active,
    description: req.body.description,
  };
  let data = await listProducts.insertProduct(product);
  res.redirect("/admin/product");
}
async function getPageCategory(req, res, next) {
  layout.render(res, "product/category", {});
}
async function insertCategory(req, res, next) {
  let cate = {
    name: req.body.name,
    active: req.body.active,
  };
  let data = await categoryModel.insertCategory(cate);
  res.redirect("/admin/product");
}
var idproduct;
async function getpageupload(req, res, next) {
  idproduct = req.params.id;
  let data = await productIMGModel.getImg(idproduct);
  layout.render(res, "product/upload", {
    data: data,
    idproduct: idproduct,
  });
}
async function upload(req, res, next) {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = "./public/images/product/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/admin/product/upload/" + req.body.productid);
  });
  let img = {
    id: req.body.productid,
    url: sampleFile.name,
  };
  let result = await productIMGModel.insertIMG(img);
}
async function deleteimg(req, res, next) {
  let id = req.params.id;
  let result = await productIMGModel.deleteimg(id);
  res.redirect("/admin/product/upload/" + idproduct);
}
module.exports = {
  deleteimg: deleteimg,
  upload: upload,
  getpageupload: getpageupload,
  insertCategory: insertCategory,
  getPageCategory: getPageCategory,
  getPage: getPage,
  getlist: getlist,
  deleteProduct: deleteProduct,
  getProductEdit: getProductEdit,
  editProduct: editProduct,
  insertProduct: insertProduct,
};
