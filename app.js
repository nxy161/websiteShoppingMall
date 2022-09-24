var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/public/index");
var loginAdminRouter = require("./routes/admin/login");
var adminRouter = require("./routes/admin/admin");
var usersRouter = require("./routes/public/users");
var productsRouter = require("./routes/public/product");
var cartRouter = require("./routes/public/cart");
var checkoutRouter = require("./routes/public/checkout");
var productsAdminRouter = require("./routes/admin/product");
var userAdminRouter = require("./routes/admin/user");
var voucherRouter = require('./routes/admin/voucher');

var session = require("express-session");
var upload = require("express-fileupload");
var app = express();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 60000 },
  })
);

// view engine setup
app.set("trust proxy", 1);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(upload());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin/voucher', voucherRouter);
app.use("/admin/user", userAdminRouter);
app.use("/cart", cartRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/checkout", checkoutRouter);
app.use("/login", loginAdminRouter);
app.use("/admin", adminRouter);
app.use("/admin/product", productsAdminRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
