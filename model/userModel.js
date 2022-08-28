var con = require("./index");
function listUser() {
  return new Promise((resolve, reject) => {
    con.query(
      `
        SELECT * FROM user
        `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
function getUser(userLogin) {
  return new Promise((resolve, reject) => {
    con.query(
      `
        SELECT * FROM user WHERE username = '${userLogin.user}' AND password = '${userLogin.password}'
        `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
function adduser(user) {
  return new Promise((resolve, reject) => {
    con.query(
      `
      INSERT INTO user
      (fullName, gender, birthday, avatar, active,user_id, username, password)
      VALUES
      ('${user.name}','${user.gender}','${user.birthday}','${user.avatar}',
      '${user.active}','${user.userid}','${user.username}','${user.password}')
        `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
function deluser(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `
      DELETE FROM user WHERE id = '${id}'
        `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
function getuserEdit(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `
      SELECT * FROM user WHERE id = '${id}'
        `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
function editUser(user) {
  return new Promise((resolve, reject) => {
    con.query(
      `
      UPDATE user SET fullName='${user.name}',gender='${user.gender}',birthday='${user.birthday}',avatar='${user.avatar}',active='${user.active}',user_id='${user.userid}',username='${user.username}',password='${user.password}' WHERE id = '${user.id}'
      `,
      (err, result) => {
        if (err) throw err;
        return resolve(result);
      }
    );
  });
}
module.exports = {
  editUser:editUser,
  getuserEdit:getuserEdit,
  deluser: deluser,
  adduser:adduser,
  getUser: getUser,
  listUser: listUser,
};
