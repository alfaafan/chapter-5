const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

app.use(morgan("dev"));

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

const route = require("./routes/route");
app.use(route);

// internal server handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    error: err.message,
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("404", { title: "404: Not Found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
