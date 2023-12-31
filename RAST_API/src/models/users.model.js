const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Ruhul Islam",
    age: 45,
  },
  {
    id: uuidv4(),
    name: "Mohona Khatun",
    age: 18,
  },
  {
    id: uuidv4(),
    name: "Mustakim Sorkar",
    age: 24,
  },
];

module.exports = users;
