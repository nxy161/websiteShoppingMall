var layout = require("./myController");
var invoiceModel = require("./../../model/invoiceModel");
var voucherModel = require("./../../model/voucherModel");
var moment = require("moment");

async function checkout(req, res) {
  let datavoucher = await voucherModel.getListVoucher();

  layout.render(res, "checkout", {
    datavoucher: datavoucher,
  });
}
async function done(req, res) {
  layout.render(res, "done", {});
}
async function createdInvoice(req, res) {
  let invoice = {
    total_price: req.body.total_price,
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    default_price: req.body.total_defaul,
    discount: 0,
    note: "",
    date: moment().format("YYYY-MM-DD"),
    discount: 0,
    // Thêm đúng dữ liệu vào
    // customer_name, customer_phone, customer_address,
  };
  console.log(invoice);
  let result = await invoiceModel.insertInvoice(invoice);
  // đã có id invoice

  let products = JSON.parse(req.body.products);
  let ressult = await invoiceModel.insertInvoiceDetail(
    products,
    result.insertId
  );
  res.redirect("/checkout/done");
}

module.exports = {
  checkout: checkout,
  createdInvoice: createdInvoice,
  done: done,
};
