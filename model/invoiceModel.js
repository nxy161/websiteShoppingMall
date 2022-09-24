var con = require("./index");

function insertInvoice(invoice) {
  return new Promise((resolve, reject) => {
    con.query(
      `
    INSERT INTO invoices
    (total_price, customer_name, customer_phone, customer_address, default_price, note, date, discount) 
    VALUES 
        (
        '${invoice.total_price}','${invoice.name}','${invoice.phone}','${invoice.address}', '${invoice.default_price}','${invoice.note}','${invoice.date}','${invoice.discount}'
        )
        `
    , 
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}

function insertInvoiceDetail(products, invoiceId) {
  return new Promise((resolve, reject) => {
    let valueInsert = []; 
    console.log(products);
    products.forEach((product) => {
      let tam = [];
      tam.push(invoiceId);
      tam.push(product.id);
      tam.push(product.price);
      tam.push(product.quantity);
      valueInsert.push(tam);
    });
    con.query(
      `
      INSERT INTO invoice_details( invoice_id, product_id, price, quantity) 
      VALUES ?
      `
      ,[valueInsert],
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
});
}

module.exports = {
  insertInvoice: insertInvoice,
  insertInvoiceDetail: insertInvoiceDetail,
};



