var con = require("./index");
function getListVoucher() {
  return new Promise((resolve, reject) => {
    con.query(
      `
          SELECT * FROM vouchers
          `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}

function addVoucher(voucher) {
  return new Promise((resolve, reject) => {
    con.query(
      `
          INSERT INTO
          vouchers
          (name, type_discount, discount, note, date_expired, user_id, max_use) 
          VALUES
           ('${voucher.name}','${voucher.type}','${voucher.discount}','${voucher.note}','${voucher.date}',
           '${voucher.userid}','${voucher.maxuse}')
              `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
function deleteVoucher(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `
          DELETE FROM vouchers WHERE id = '${id}'
                  `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
module.exports = {
  deleteVoucher: deleteVoucher,
  addVoucher: addVoucher,
  getListVoucher: getListVoucher,
};
