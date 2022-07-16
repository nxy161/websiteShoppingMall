var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping",
});
con.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected as id " + con.threadId);
});

module.exports = con;
