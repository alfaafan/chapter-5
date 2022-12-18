const express = require("express");
const router = express.Router();
const users = require("../users");

router.use((req, res, next) => {
  console.log("router level middleware");
  next();
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password });
  console.log(users);

  res.redirect("/");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
});

module.exports = router;
