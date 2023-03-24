import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p> {post.description} </p>
      <div className="operation">
        <Link to={`/edit/${post.postid}`}>Edit</Link>/<a>Delete</a>
      </div>
    </>
  );
}

export default Post;
