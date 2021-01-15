import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  let [posts, setPosts] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:3400/posts");
      console.log(res);
      await setPosts(res.data);
      console.log(posts);
      //   console.log(posts);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
      {typeof posts === Array ? <h1>{posts.map.title}</h1> : <h1>{posts}</h1>}
    </div>
  );
};

export default Posts;
