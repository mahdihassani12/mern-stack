const Post = require("../models/PostModel");

exports.getPosts = async (req, res) => {};

exports.storePost = async (req, res) => {
  const { title, description, postid } = req.body;
  try {
    const addPost = new Post({
      postid,
      title,
      description,
    });
    const post = await addPost.save();
    res.json({ post });
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};
