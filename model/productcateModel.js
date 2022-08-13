var con = require("./index");


function getProductCategories(id,limit,offset) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT * FROM products AS p 
        JOIN product_images AS pi ON p.id = pi.product_id 
        WHERE p.category_id = ${id} 
        LIMIT ${limit} OFFSET ${offset};`,
      (err, result) => {
        if (err) throw err;
        if(result){
          con.query(
            `SELECT COUNT(1) count FROM products AS p 
            JOIN product_images AS pi ON p.id = pi.product_id 
            WHERE p.category_id = ${id};`,
            (err, rs) => {
              if (err) throw err;
              let data = {
                data : result,
                count: rs[0].count
              }
              return resolve(data);
            }
          );
        }
      }
    );
    
  });
};
module.exports = {
    getProductCategories: getProductCategories,
  };