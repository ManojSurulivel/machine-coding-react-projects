import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setUser } from "./TodoSlice";
import "./style.css"; // Import the CSS file

const TodoComponent = () => {
  const [name, setName] = useState("manoj");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.todoUser.users); // Access state

  const addUser = () => {
    if (name.trim() !== "") {
      dispatch(setUser(name)); // Dispatch action
      setName(""); // Clear input
    }
  };

  const deleteUserInfo = (index) => {
    dispatch(deleteUser(index)); // Dispatch delete action
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
          placeholder="Enter a name..."
          className="todo-input"
        />
        <button onClick={addUser} className="add-btn">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {users.map((user, index) => (
          <li key={index} className="todo-item">
            <span>{user}</span>
            <button onClick={() => deleteUserInfo(index)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </form>
  );
};

export default TodoComponent;
