
var layout = require('./myController');
var product = require("../../model/productModel");

async function index(req,res){
    
    // lấy dữ liệu sản phẩm trảng chủ ở đây
    let products = await product.getProducts();
    layout.render(res,'home',{
        products: products
    });
}

module.exports= {
    index: index
};