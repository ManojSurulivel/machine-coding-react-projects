import React from "react";
import "./Toast.css";

const Toast = ({ id, type, message, onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={() => onClose(id)}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
