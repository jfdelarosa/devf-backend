const { UserService } = require("../services/index");

module.exports = {
  list: async (req, res, next) => {
    try {
      const payload = await UserService.list();
      res.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = await UserService.findById(id);
      res.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  },
  getFollowers: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = await UserService.findById(id, "followers");
      res.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  },
  getFollowing: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = await UserService.findById(id, "following");
      res.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { body, params } = req;
      const { id } = params;

      const payload = await UserService.findById(id);

      Object.assign(payload, body);

      await payload.save();

      res.status(202).json(payload);
    } catch (error) {
      next(error);
    }
  },
};
