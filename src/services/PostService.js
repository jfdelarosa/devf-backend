const { Post } = require("../models/index.js");

module.exports = {
  list: () => Post.find(),
  create: (body) => new Post(body).save(),
};
