import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Post({ post }) {

  const deletePost = () => {

    axios.post(`http://localhost:5000/api/posts/delete/${post.postid}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err)) 

  }

  return (
    <>
      <h1>{post.title}</h1>
      <p> {post.description} </p>
      <div className="operation">
        <button type="button">
          <Link to={`/edit/${post.postid}`}>Edit</Link>
        </button>
        /
        <button type="button" onClick={ deletePost }>Delete</button>
      </div>
    </>
  );
}

export default Post;
