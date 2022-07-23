var con = require("./index");


function getProductCategories(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT * FROM products AS p JOIN product_images AS pi ON p.id = pi.product_id WHERE p.category_id = ${id} LIMIT 6;`,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
};
module.exports = {
    getProductCategories: getProductCategories,
  };