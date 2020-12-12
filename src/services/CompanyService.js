const { Company } = require("../models/index");

module.exports = {
  create: (body) => new Company(body).save(),
  getLatest: async () => {
    try {
      const result = await Company.find({ is_active: true })
        .sort({ createdAt: -1 })
        .limit(10);

      if (result) {
        return result;
      }

      throw new Error("Cannot find companies");
    } catch (error) {
      throw new Error(error);
    }
  },
  find: async (id) => {
    try {
      const result = await Company.findById(id);

      if (result) {
        return result;
      }

      throw new Error("Cannot find companies");
    } catch (error) {
      throw new Error(error);
    }
  },
};
