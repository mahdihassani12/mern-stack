const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.getPosts);
router.post("/", postsController.storePost);

module.exports = router;