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
};
