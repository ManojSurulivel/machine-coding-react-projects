import React from "react";
import "h8k-components";
import Home from "./Home";
import './BlogPost.css';


const title = "Blog Post";

const BlogPost = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <Home />
    </div>
  );
};

export default BlogPost;
