var layout = require("./myController");
var userModel = require("../../model/userModel");
var moment = require("moment");

function login(req, res, next) {
  let data = {
    error: "",
  };
  layout.renderEmpty(res, "admin/login", data);
}
async function postLogin(req, res, next) {
  let userLogin = {
    user: req.body.user,
    password: req.body.pass,
  };
  let result = await userModel.getUser(userLogin);

  if (result && result.length > 0) {
    // req.session.user = result[0];
    // req.session.save(function (err) {
    // if (err) return next(err)
    res.redirect("/admin");
    //   })
  }
  let data = {
    error: "Sai tên đăng nhập hoặc mật khẩu !",
  };
  layout.renderEmpty(res, "admin/login", data);
}

async function logout(req, res, next) {
  req.session.user = null;
  req.session.save(function (err) {
    if (err) next(err);
    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err);
      res.redirect("/login");
    });
  });
}
async function getlistUser(req, res, next) {
  let data = await userModel.listUser();
  layout.render(res, "user/list", {
    data: data,
    moment: moment,
  });
}
async function getpageAdd(req, res, next) {
  layout.render(res, "user/add", {});
}
async function adduser(req, res, next) {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = "./public/images/product/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/admin/user");
  });
  let user = {
    name: req.body.name,
    gender: req.body.gender,
    birthday:moment(req.body.birthday).format("YYYY-MM-DD"),
    avatar: sampleFile.name,
    userid: req.body.userID,
    active: req.body.active,
    username: req.body.username,
    password: req.body.password,
  };
  let data = await userModel.adduser(user);
}
async function deluser(req, res, next) {
  let id = req.params.id;
  let data = await userModel.deluser(id);
  res.redirect("/admin/user");
}
async function getuserEdit(req, res, next) {
  let id = req.params.id;
  let data = await userModel.getuserEdit(id);
  layout.render(res, "user/edit", {
    data: data,
    moment: moment,
  });
}
async function editUser(req, res, next) {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = "./public/images/product/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/admin/user");
  });
  let user = {
    id: req.body.idedit,
    name: req.body.name,
    gender: req.body.gender,
    birthday: moment(req.body.birthday).format("YYYY-MM-DD"),
    avatar: sampleFile.name,
    userid: req.body.userID,
    active: req.body.active,
    username: req.body.username,
    password: req.body.password,
  };
  let data = await userModel.editUser(user);
}
module.exports = {
  editUser: editUser,
  getuserEdit: getuserEdit,
  deluser: deluser,
  adduser: adduser,
  getpageAdd: getpageAdd,
  getlistUser: getlistUser,
  login: login,
  postLogin: postLogin,
  logout: logout,
};
