const express = require("express");
const { PostController } = require("../controllers/index");

const router = express.Router();

router.get("/", PostController.list);
router.post("/", PostController.create);
router.patch("/:id/interaction", PostController.interact);
router.patch("/:id/edit", PostController.update);

module.exports = router;
