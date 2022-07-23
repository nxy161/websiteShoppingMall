var con = require('./index');

module.exports ={
    getProducts: getProducts,
    getDetail:getDetail
}

function getProducts() {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM `products` AS p JOIN product_images AS pi ON pi.product_id = p.id LIMIT 8", (err,result)=>{
            if (err) throw err;
            return resolve(result);
        });
    });
};

function getDetail(id){
    return new Promise((resolve, reject) => {
        con.query(`
            SELECT * FROM products AS p
            JOIN categories AS c ON c.id = p.category_id
            WHERE p.id = ${id}
        `, (err,result)=>{
            if (err) throw err;

            if(result){
                product = result[0];
                product.images = [];
                console.log(product);
                con.query(`
                    SELECT * FROM product_images i WHERE i.product_id = ${id}
                `,
                (e,rs)=>{
                    if (e) throw e;
                    if(rs){
                        product.images = rs;
                    }
                    return resolve(product);
                });
            }
        });
    });
}
