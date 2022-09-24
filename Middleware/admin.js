module.exports = {
    hasLogin: hasLogin
}

function hasLogin(req,res,next) {
    if(req.session.user && req.session.id){
        next();
    }else{  
        res.redirect("/login");
    }
}