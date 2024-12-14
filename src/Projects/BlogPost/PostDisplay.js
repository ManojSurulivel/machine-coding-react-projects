import React from "react";
import './BlogPost.css';

function PostDisplay({ posts, onDelete }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts.map((post) => (
        <div key={post.id} className="post-box">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
