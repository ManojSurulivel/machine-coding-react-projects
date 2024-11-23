import React, { useState } from "react";

const Todo = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (display.includes(name)) {
      setError("already exist");
    } else {
      setDisplay([...display, name]);
      setError("");
    }
  };

  const deleteTask = (index) => {
    const updateDelete = display.filter((_, i) => i !== index);
    setDisplay(updateDelete);
    setError("");
  };

  return (
  <div>
    <div>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a name..." style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}/>
    <button  onClick={addTask} >Add</button>
    </div>

      <div style={{padding:"5px",margin:"10px"}}>   
        <h1>{error}</h1>
      <ul >
        {display.map((value, index) => (                            //{display.map( () => () )} => map function in "arrow function" with  "parentheses" (two different parentheses)
          <li key={index} style={{padding:"5px",margin:"10px"}}>
            {value}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
   
    </div>
  );
};

export default Todo;
