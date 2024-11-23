import React, { useState, useEffect } from "react";
import "./PostWithComments.css";

const PostWithComments = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dummy data for posts
  const fetchPosts = () => {
    return [
      { id: 1, title: "Post 1", content: "This is the content of post 1" },
      { id: 2, title: "Post 2", content: "This is the content of post 2" },
      { id: 3, title: "Post 3", content: "This is the content of post 3" },
    ];
  };

  // Dummy data for comments
  const fetchComments = (postId) => {
    const allComments = {
      1: [
        { id: 1, text: "Great post!" },
        { id: 2, text: "Very helpful." },
      ],
      2: [{ id: 3, text: "Interesting read." }],
      3: [],
    };
    return allComments[postId] || [];
  };

  useEffect(() => {
    const postsData = fetchPosts();
    setPosts(postsData);
  }, []);

  const handlePostClick = (postId) => {
    setLoading(true);
    setSelectedPost(postId);
    setTimeout(() => {
      const commentsData = fetchComments(postId);
      setComments(commentsData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="app">
      <h1>Posts with Comments</h1>
      <div className="posts">
        <h2>Posts</h2>
        {posts.map((post) => (
          <div
            key={post.id}
            className={`post ${selectedPost === post.id ? "active" : ""}`}
            onClick={() => handlePostClick(post.id)}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <div className="comments">
        <h2>Comments</h2>
        {loading ? (
          <p>Loading comments...</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <p key={comment.id} className="comment">
              {comment.text}
            </p>
          ))
        ) : (
          <p>No comments available for this post.</p>
        )}
      </div>
    </div>
  );
};

export default PostWithComments;
