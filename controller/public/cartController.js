var layout = require("./myController");

async function cart(req, res) {
  layout.render(res, "cart", {});
}

module.exports = {
  cart: cart,
};
