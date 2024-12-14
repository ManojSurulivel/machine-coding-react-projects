import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";
import './BlogPost.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePost = () => {
    if (title.trim() && description.trim()) {
      const newPost = { id: Date.now(), title, description };
      setPosts([...posts, newPost]);
      setTitle("");
      setDescription("");
    }
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
        />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} onDelete={handleDeletePost} />
      </div>
    </div>
  );
}

export default Home;
