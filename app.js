var express = require("express");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var env = require("./config");
var engine = require("ejs-mate");
var lodash = require("lodash");
var co = require("./routes/common");
var i18n = require("./i18n");
var app = express();
var bodyParser = require("body-parser");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const assets = {
  dist: `public/dist/assets`
};
// view engine setup
app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("case sensitive routing", true);

app.use(
  session({
    secret: "@#@$landy#@$#$",
    resave: false,
    saveUninitialized: true
    // store:new FileStore()
    // cookie: { secure: true }
  })
);

app.use(function(req, res, next) {
  // res.locals.dummy = require('./dummy.json');
  const { user } = req.session;
  res.locals.sess = req.session;
  res.locals.isLogged = user;
  if (user) {
    res.locals.loginUserType = user.userType;
  }
  res.locals.iif = function(cond, value) {
    if (cond) return value;
    return "";
  };
  res.locals._stylesheets = "/dist/assets/css";
  res.locals._components = __dirname + "/views/components";
  res.locals._layoutFile = `/components/base/helpers/layout`;
  res.locals._templateFile = `/components/base/template/UserListTemplate`;
  res.locals._ = lodash;
  res.locals.views = __dirname + "/views";
  res.locals.dirname = __dirname;
  res.locals.commonModulePath = __dirname + "/views/Common/Components";
  res.locals.mypageModulePath = __dirname + "/views/pages/users/Mypage/modules";
  res.locals.NODE_ENV = env.mode;
  res.locals.co = co;
  next();
});



app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({limit: '100mb'}));
app.use(bodyParser.json({limit: '100mb'}));

app.use(express.static(path.join(__dirname, "public")));
app.use(`/lib`, express.static(__dirname + "/lib"));
app.use(
  `/img`,
  express.static(path.join(__dirname, `${assets.dist}/img/pages`))
);
app.use(
  `/img-common`,
  express.static(path.join(__dirname, `${assets.dist}/img/common`))
);
app.use(
  `/sprite`,
  express.static(path.join(__dirname, `${assets.dist}/img/sprite`))
);
app.use("/global", express.static(path.join(__dirname)));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  if (env.mode == "development" || env.mode == "dev") {
    res.render("error", { NODE_ENV: "development" });
  } else {
    res.render("error", { NODE_ENV: "production" });
  }
});


module.exports = app;

console.log("node process env NODE_ ENV : ", process.env.NODE_ENV);
console.log("env dotenv process NODE_EVN :", env.mode);
