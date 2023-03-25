const Post = require("../models/PostModel");

exports.getPosts = async (req, res) => {
  try {
    
    const posts = await Post.find({});
    res.send(posts);

  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};

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

exports.getPost = async (req, res) => {
  const { postid } = req.params;
  try {

    const post = await Post.find({ "postid" : postid });
    res.send(post)

  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
}

exports.updatePost = async (req, res) => {
  const { title, description, postid } = req.body;
  try {

    const post = await Post.updateOne({postid: postid }, { title: title, description: description });
    res.send(post);
    
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
}

exports.deletePost = async (req, res) => {
  const { postid } = req.params;
  try {

    const post = await Post.findOneAndDelete({postid: postid });
    res.send(post);
    
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
}