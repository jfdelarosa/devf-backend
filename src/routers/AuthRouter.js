const express = require("express");
const { AuthController } = require("../controllers/index.js");
const { AuthValidator } = require("../validators/index.js");

const router = express.Router();

router.post("/signup", AuthValidator.signup, AuthController.signup);
router.post("/login", AuthValidator.login, AuthController.login);

module.exports = router;
