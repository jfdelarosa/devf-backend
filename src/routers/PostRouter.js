const express = require("express");
const { PostController } = require("../controllers/index.js");

const router = express.Router();

router.get("/posts", PostController.list);
router.post("/posts", PostController.create);
router.patch("/posts/:id/interaction", PostController.interact);
router.patch("/posts/:id/edit", PostController.update);

module.exports = router;
