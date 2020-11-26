const { AuthService } = require("../services/index.js");

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { body } = req;
      const payload = await AuthService.create(body);

      res.status(201).json(payload);
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const payload = await AuthService.login(email, password);

      if (payload) {
        return res.status(200).json(payload);
      }

      res.status(401).json({ error: "Login failed" });
    } catch (error) {
      next(error);
    }
  },
};
