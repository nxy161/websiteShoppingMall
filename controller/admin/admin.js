var layout = require("../public/myController");

async function admin(req, res) {
  layout.render(res, "admin", {});
}

module.exports = {
  admin: admin,
};
