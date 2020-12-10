const { Post } = require("../models/index");

module.exports = {
  list: () => Post.find(),
  create: (body) => new Post(body).save(),
};
