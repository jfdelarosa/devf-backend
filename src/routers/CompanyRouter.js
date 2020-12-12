const express = require("express");
const { CompanyController } = require("../controllers/index");
const { CompanyValidator } = require("../validators/index");

const router = express.Router();

router.post("/", CompanyValidator.create, CompanyController.create);
router.get("/", CompanyController.getLatests);
router.get("/:id", CompanyController.getById);
// router.post("/:id/comment", CompanyController.getById);

module.exports = router;
