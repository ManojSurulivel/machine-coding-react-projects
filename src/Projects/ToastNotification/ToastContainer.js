import React, { useState } from "react";
import Toast from "./Toast";
import "./ToastContainer.css";

let toastId = 0;

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, type, message }]);

    // Auto-dismiss toast after 3 seconds
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      <button onClick={() => addToast("success", "Success! Your action worked!")}>
        Show Success
      </button>
      <button onClick={() => addToast("error", "Error! Something went wrong.")}>
        Show Error
      </button>
      <button onClick={() => addToast("info", "Info: Here's some information.")}>
        Show Info
      </button>
      <button onClick={() => addToast("warning", "Warning! Check this out.")}>
        Show Warning
      </button>

      <div className="toast-wrapper">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={removeToast}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;
