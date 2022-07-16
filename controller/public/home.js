
var layout = require('./myController');

function index(req,res){
    
    layout.render(res,'home',{});
}

module.exports= {
    index: index
};