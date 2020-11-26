const { PostService } = require("../services/index.js");

module.exports = {
  list: async (req, res, next) => {
    try {
      const payload = await PostService.list();

      res.status(200).json({ payload });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { body } = req;
      const newPost = await PostService.create(body);

      res.status(201).json({ payload: newPost });
    } catch (error) {
      next(error);
    }
  },
  interact: async (req, res, next) => {},
  update: async (req, res, next) => {},
};
