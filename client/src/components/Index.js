import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

function Index() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/posts/")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app-container">
      <div className="row">

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post) => {
            return (
              <div key={post.postid} className="col">
                <Post post={post} />
              </div>
            );
          })
        )}

      </div>
    </div>
  );
}

export default Index;
