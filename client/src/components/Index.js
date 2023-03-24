import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

function Index() {

  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("/api/posts/")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="app-container">
      <Post />
    </div>
  );
}

export default Index;
