var layout = require("./myController");
var voucherModel = require("../../model/voucherModel");
var moment = require("moment");

async function getList(req, res, next) {
  let data = await voucherModel.getListVoucher();
  layout.render(res, "voucher/list", {
    data: data,
    moment: moment,
  });
}
async function getPageAdd(req, res, next) {
  layout.render(res, "voucher/add", {});
}
async function addVoucher(req, res, next) {
   
  let voucher = {
    name: req.body.name,
    type: req.body.typediscount,
    discount: req.body.discount,
    note: req.body.note,
    date: moment(req.body.date, "YYYY-MM-DD"),
    userid: req.body.userID,
    maxuse: req.body.maxuse,
  };
  let data = await voucherModel.addVoucher(voucher);
  res.redirect("/admin/voucher");
}
async function deleteVoucher(req, res, next) {
  let id = req.params.id;
  let data = await voucherModel.deleteVoucher(id);
  res.redirect("/admin/voucher");
}
module.exports = {
  deleteVoucher: deleteVoucher,
  addVoucher: addVoucher,
  getPageAdd: getPageAdd,
  getList: getList,
};
