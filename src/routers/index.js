const express = require("express");
const AuthRouter = require("./AuthRouter.js");
const UserRouter = require("./UserRouter.js");
const PostRouter = require("./PostRouter.js");

const router = express.Router();

router.use(AuthRouter);
router.use(UserRouter);
router.use(PostRouter);

module.exports = router;
