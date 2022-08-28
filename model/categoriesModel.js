var con = require('./index');

module.exports ={
    getCategories: getCategories,
    insertCategory:insertCategory
}
function insertCategory(cate) {
    return new Promise((resolve, reject) => {
        con.query(
            `INSERT INTO categories(name,active)
            VALUE
            ('${cate.name}','${cate.active}')
             `,
         (err,result)=>{
            if (err) throw err;
            return resolve(result);
        });
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        con.query("SELECT id,name FROM categories WHERE active = 'Y'", (err,result)=>{
            if (err) throw err;
            return resolve(result);
        });
    });
};
