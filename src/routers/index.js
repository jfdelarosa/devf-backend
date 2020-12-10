const express = require("express");
const AuthRouter = require("./AuthRouter");
const UserRouter = require("./UserRouter");
const PostRouter = require("./PostRouter");
const CompanyRouter = require("./CompanyRouter");

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);
router.use("/post", PostRouter);
router.use("/company", CompanyRouter);

module.exports = router;
