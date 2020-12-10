const express = require("express");
const { AuthController } = require("../controllers/index");
const { AuthValidator } = require("../validators/index");

const router = express.Router();

router.post("/signup", AuthValidator.signup, AuthController.signup);
router.post("/login", AuthValidator.login, AuthController.login);

module.exports = router;
