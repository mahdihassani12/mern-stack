const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.getPosts);
router.post("/", postsController.storePost);
router.get("/:postid", postsController.getPost);
router.post("/:postid", postsController.updatePost);
router.post("/delete/:postid", postsController.deletePost);

module.exports = router;