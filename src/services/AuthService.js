const { User } = require("../models/index");
const { compareSync, createToken } = require("../utils/auth");

module.exports = {
  create: (body) => new User(body).save(),
  login: async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (user) {
        const isMatch = compareSync(password, user.password);
        if (isMatch) {
          return createToken(user);
        }

        throw new Error("Wrong password");
      }

      throw new Error("Wrong email");
    } catch (error) {
      throw new Error(error);
    }
  },
};
