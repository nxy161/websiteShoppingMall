var baseUrl = "http://localhost:3000/";
var baseUrlAdmin = "http://localhost:3000/admin/";

async function renderView(res, view, data = {}) {
  let tmp = {
    view: view,
    data: data,
  };
  tmp.data.baseUrl = baseUrl;
  tmp.data.baseUrlAdmin = baseUrlAdmin;
  res.render("admin/index", tmp);
}

function renderEmpty(res, view, data = {}) {
  data.baseUrl = baseUrl;
  data.baseUrlAdmin = baseUrlAdmin;
  res.render(view, data);
}

module.exports = {
  render: renderView,
  renderEmpty: renderEmpty,
};
