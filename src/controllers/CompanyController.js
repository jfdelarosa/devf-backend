const { CompanyService } = require("../services/index.js");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { body, decoded } = req;

      body.created_by = decoded;

      const payload = await CompanyService.create(body);

      res.status(201).json(payload);
    } catch (error) {
      next(error);
    }
  },
  getLatests: async (req, res, next) => {
    try {
      const data = await CompanyService.getLatest();
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  },
};
