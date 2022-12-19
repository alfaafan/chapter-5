const express = require("express");
const route = express.Router();
const userController = require("../controller/userController");

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/game", (req, res) => {
  res.render("game");
});

route.get("/api/users", userController.getAll);

route.get("/api/users/:id", userController.show);

route.post("/api/users", userController.create);

route.put("/api/users/:id", userController.update);

route.delete("/api/users/:id", userController.delete);

module.exports = route;
