const express = require("express");
const AuthRouter = require("./AuthRouter.js");
const UserRouter = require("./UserRouter.js");
const PostRouter = require("./PostRouter.js");
const CompanyRouter = require("./CompanyRouter.js");

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);
router.use("/post", PostRouter);
router.use("/company", CompanyRouter);

module.exports = router;
