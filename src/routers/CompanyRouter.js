const express = require("express");
const { CompanyController } = require("../controllers/index.js");
const { CompanyValidator } = require("../validators/index.js");

const router = express.Router();

router.post("/", CompanyValidator.create, CompanyController.create);
router.get("/", CompanyController.getLatests);

module.exports = router;
