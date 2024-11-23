import React, { useState } from "react";
import "./NestedComment.css";

const NestedComment = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = (parentId = null, content = text) => {
    const newComment = {
      id: Date.now(),
      parentId,
      content,
      replies: [],
    };

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === parentId
            ? { ...comment, replies: [...comment.replies, newComment] }
            : comment
        )
      );
    }
    setText(""); // Reset the input field
  };

  const renderComments = (comments) =>
    comments.map((comment) => (
      <div key={comment.id} className="comment">
        <p>{comment.content}</p>
        <button
          className="reply-button"
          onClick={() => addComment(comment.id, prompt("Enter your reply:"))}
        >
          Reply
        </button>
        <div className="replies">{renderComments(comment.replies)}</div>
      </div>
    ));

  return (
    <div className="app">
      <h1>Nested Comment Section</h1>
      <div className="comment-input">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={() => addComment()}>Add Comment</button>
      </div>
      <div className="comments">{renderComments(comments)}</div>
    </div>
  );
};

export default NestedComment;
