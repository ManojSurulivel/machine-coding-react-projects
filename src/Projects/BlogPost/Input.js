import React from "react";
import './BlogPost.css';

function Input({ title, description, setTitle, setDescription }) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input
        className="w-100"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="title-input"
      />
      <textarea
        className="mt-10 w-100"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        data-testid="description-input"
      />
    </div>
  );
}

export default Input;
