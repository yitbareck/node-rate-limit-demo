const users = require("../data/user");

const getAllUsers = () => {
  return users;
};
const getUserById = (id) => {
  users.find((user) => user.id === id);
};
const getUserByEmail = (email) => {
  users.find((user) => user.email === email);
};

module.exports = { getAllUsers, getUserById, getUserByEmail };
