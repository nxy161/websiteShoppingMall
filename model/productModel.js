var con = require("./index");

module.exports = {
  getProducts: getProducts,
  getDetail: getDetail,
  getTopsale: getTopsale,
  getBestsale: getBestsale,
};

function getProducts(limit, offset) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT * FROM products AS p JOIN product_images AS pi ON pi.product_id = p.id LIMIT ${limit} OFFSET ${offset}`,
      (err, result) => {
        if (err) throw err;
        if (result) {
          con.query(
                  `
                    SELECT COUNT(1) count FROM products AS p
                    JOIN product_images AS pi ON pi.product_id = p.id
                  `,
            (err, rs) => {
              if (err) throw err;
              let data = {
                data: result,
                count: rs[0].count,
              };
              return resolve(data);
            }
          );
        }
      }
    );
  });
}

function getDetail(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `
            SELECT p.id, p.name, p.price FROM products AS p
            JOIN categories AS c ON c.id = p.category_id
            WHERE p.id = ${id}
        `,
      (err, result) => {
        if (err) throw err;

        if (result) {
          product = result[0];
          product.images = [];
          
          con.query(
            `
                    SELECT * FROM product_images i WHERE i.product_id = ${id}
                `,
            (e, rs) => {
              if (e) throw e;
              if (rs) {
                product.images = rs;
              }
              return resolve(product);
            }
          );
        }
      }
    );
  });
}
function getTopsale(limit, offset) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT p.name,pim.url,p.price, SUM(ide.quantity) AS sumq FROM invoice_details AS ide
        JOIN products AS p ON p.id = ide.product_id
        JOIN product_images AS pim ON pim.product_id = p.id
        GROUP BY p.id LIMIT ${limit} OFFSET ${offset}
        ORDER BY sumq DESC;`,
      (err, result) => {
        if (err) throw err;
        if (result) {
          con.query(
            `
                    SELECT COUNT(1) count FROM invoice_details AS ide
                    JOIN products AS p ON p.id = ide.product_id
                    JOIN product_images AS pim ON pim.product_id = p.id
                  `,
            (err, rs) => {
              if (err) throw err;
              let data = {
                data: result,
                count: rs[0].count,
              };
              return resolve(data);
            }
          );
        }
      }
    );
  });
}
function getBestsale() {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT p.name,pim.url,p.price, SUM(ide.quantity) AS sumq FROM invoice_details AS ide
        JOIN products AS p ON p.id = ide.product_id
        JOIN product_images AS pim ON pim.product_id = p.id
        GROUP BY p.id
        ORDER BY sumq DESC;`,
      (err, result) => {
        if (err) throw err;
        if (result) {
            con.query(
                    `
                      SELECT COUNT(1) count FROM invoice_details AS ide
                      JOIN products AS p ON p.id = ide.product_id
                      JOIN product_images AS pim ON pim.product_id = p.id
                    `,
              (err, rs) => {
                if (err) throw err;
                let data = {
                  data: result,
                  count: rs[0].count,
                };
                return resolve(data);
              }
            );
          }
      }
    );
  });
}
