var layout = require("./myController");

function index(req, res, next) {
  console.log(req.session.user);
  layout.render(res, "admin", {});
}
module.exports = {
  index: index,
};
