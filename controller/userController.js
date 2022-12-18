let users = require("../db/users.json");

exports.getAll = (req, res) => {
  res.json(users);
};

exports.create = (req, res) => {
  const { email, password } = req.body;

  const user = {
    id: users[users.length - 1].id + 1,
    email,
    password,
  };

  users.push(user);

  res.status(201).json(user);
};

exports.show = (req, res) => {
  const { id } = req.params;

  const user = users.find((i) => i.id === parseInt(id));

  res.json(user);
};

exports.update = (req, res) => {
  const { id } = req.params;

  let user = users.find((i) => i.id === parseInt(id));

  const { email, password } = req.body;

  user = {
    ...user,
    title: title === undefined ? user.title : title,
    body: body === undefined ? user.body : body,
  };

  users = users.map((i) => {
    if (i.id === user.id) {
      return user;
    }
    return i;
  });

  res.json(users);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  users = users.filter((i) => i.id !== parseInt(id));

  res.json(users);
};
