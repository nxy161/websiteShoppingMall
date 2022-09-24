var layout = require("./myController");
var voucherModel = require("./../../model/voucherModel");

async function cart(req, res) {
  layout.render(res, "cart", {
  });
}

module.exports = {
  cart: cart,
};
