const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("game");
});

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
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
