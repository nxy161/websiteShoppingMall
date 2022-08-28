var con = require("./index");
module.exports = {
    getImg:getImg,
    insertIMG:insertIMG,
    deleteimg:deleteimg
  };
  function deleteimg(id) {
    return new Promise((resolve, reject) => {
      con.query(
        `
        DELETE FROM product_images WHERE id = '${id}'
        `,
        (err, result) => {
          if (err) throw err;
          return resolve(result);
        }
      );
    });
  }
  function getImg(id) {
    return new Promise((resolve, reject) => {
        con.query(
          `
          SELECT * FROM product_images WHERE product_id = '${id}'
          `,
          (err, result) => {
            if (err) throw err;
            return resolve(result);
          }
        );
      });
  }
  function insertIMG(img) {
    return new Promise((resolve, reject) => {
        console.log(img);
        con.query(
          `
          INSERT INTO product_images (product_id, url) 
            VALUES 
            ('${img.id}','${img.url}')
          `,
          (err, result) => {
            if (err) throw err;
            return resolve(result);
          }
        );
      });
  }