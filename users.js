const express = require("express");
const app = express;
const path = require("path");
const fs = require("fs");

// const users = [];

const loadUsers = () => {
  const fileBuffer = fs.readFileSync("./db/users.json", "utf-8");
  const users = JSON.parse(fileBuffer);
  return users;
};

const findUser = (email) => {
  const users = loadUsers();
  const user = users.find((users) => user.email.toLowercase() === email.toLowercase());
  return user;
};

const saveUsers = (users) => {
  fs.writeFileSync("./db/users.json", JSON.stringify(users));
};

const addUser = (user) => {
  const users = loadUsers();
  users.push(user);
  saveUsers(users);
};

const checkUser = (email, password) => {
  if (email && password) {
    let users = loadUsers();
    let user = users.find((i) => i.email.toLowercase() === email.toLowercase());
    console.log(user);
  }
};

module.exports = { loadUsers, findUser, saveUsers, addUser, checkUser };
