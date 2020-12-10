const { User } = require("../models/index");

module.exports = {
  list: () => User.find(),
  findById: (id, props = null) => {
    if (props) {
      return User.findById(id, props);
    }
    return User.findById(id).populate("Posts");
  },
};
