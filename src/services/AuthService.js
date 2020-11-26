const { User } = require("../models/index.js");

module.exports = {
  create: (body) => new User(body).save(),
  login: (email, password) => User.findOne({ email, password }),
};
