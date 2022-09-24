var layout = require("./myController");

function index(req, res, next) {
  layout.render(res, "admin", {});
}
module.exports = {
  index: index,
};
