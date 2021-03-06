const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const chargeRouter = require("./routes/charge");
const imageRouter = require("./routes/images");
const addressRouter = require("./routes/addresses");
const itemsRouter = require("./routes/items");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
// Delete this
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("body-parser").text());

// Set RESTful API
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/charge", chargeRouter);
app.use("/images", imageRouter);
app.use("/addresses", addressRouter);
app.use("/items", itemsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
