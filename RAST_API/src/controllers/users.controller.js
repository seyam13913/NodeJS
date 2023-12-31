let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);

  res.status(201).send(users);
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, age } = req.body;

  users
    .filter((user) => user.id === userId)
    .map((selectUser) => {
      selectUser.name = name;
      selectUser.age = Number(age);
    });

  res.status(200).json(users);
};

const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);

  res.status(200).json(users);
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
