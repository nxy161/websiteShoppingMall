
var layout = require('./myController');

function getCategories(req,res){
    // req.params.id id danh mục mục
    layout.render(res,'product/category',{});
}

module.exports= {
    getCategories: getCategories
};