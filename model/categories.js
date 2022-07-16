var con = require('./index');

module.exports ={
    getCategories: getCategories,
}

function getCategories() {
    return new Promise((resolve, reject) => {
        con.query("SELECT id,name FROM categories WHERE active = 'Y'", (err,result)=>{
            if (err) throw err;
            return resolve(result);
        });
    });
};