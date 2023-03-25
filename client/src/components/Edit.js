import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updatePost = () => {
    let post = {
      title: title,
      description: description,
      postid: params.postid,
    };

    axios.post(`http://localhost:5000/api/posts/${params.postid}`, post)
    .then(res => console.log(res))
    .catch(err => console.error(err)) 

  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${params.postid}`)
      .then((res) => {
        const postdata = res.data[0];
        setTitle(postdata.title);
        setDescription(postdata.description)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app-container">
      <h1>Edit post</h1>
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

        <button onClick={updatePost}>Submit</button>
      </form>
    </div>
  );
}

export default Edit;
