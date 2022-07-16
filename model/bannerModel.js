var con = require('./index');

module.exports ={
    getBanner: getBanner,
}

function getBanner() {
    return new Promise((resolve, reject) => {
        con.query("SELECT url FROM banners WHERE active = 'Y' ORDER BY order_index DESC", (err,result)=>{
            if (err) throw err;
            return resolve(result);
        });
    });
};