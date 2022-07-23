var con = require("./index");


function getProductDetail(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT p.*, c.name AS cname FROM products AS p
      JOIN categories AS c ON c.id = p.category_id
      JOIN product_images AS pi ON pi.product_id = p.id
      WHERE p.id = ${id}`,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
};
module.exports = {
    getProductDetail: getProductDetail,
  };