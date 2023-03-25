import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    let post = {
      title: title,
      description: description,
      postid: uniqid(),
    };

    axios
      .post("http://localhost:5000/api/posts/", post)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        if (err) {
          alert("Server error");
          window.location = true;
        }
      });
  };

  return (
    <div className="app-container">
      <h1>Add a new post</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Post title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Post description</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            placeholder="Post description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <button onClick={addPost}>Submit</button>
      </form>
    </div>
  );
}

export default Create;
