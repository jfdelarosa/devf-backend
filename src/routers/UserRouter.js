const express = require("express");
const { UserController } = require("../controllers/index.js");

const router = express.Router();

router.get("/users", UserController.list);
router.get("/users/:id", UserController.findById);
router.get("/users/:id/followers", UserController.getFollowers);
router.get("/users/:id/following", UserController.getFollowing);
router.patch("/users/:id", UserController.update);

module.exports = router;
