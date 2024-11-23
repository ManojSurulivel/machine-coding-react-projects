import React, { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const[display,setDisplay] =  useState([]);
  const[error,setError] = useState("")

   const handleDelete = (index) => {
    const updateDelete = display.filter((_,i)=> i !== index);
    setDisplay(updateDelete);
    setError("")
   };

   const addTodo = () => {
    if(display.includes(name)){
      setError("already exist")
    }else{
      setDisplay([...display,name]);
      console.log(name)
      setError("");
    }
    
   }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center",margin:"32px"}}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={addTodo}>Add</button>

      <h1 style={{color:"red"}}>{error}</h1>

        <ul>
        {
        display.map((value, index) => (
          <li key={index}>
            <h5>{value}</h5>
            <button onClick={()=>handleDelete(index)}>del</button>
            </li>
      ))
      }
        </ul> 
    
    </div>
  );
}

export default Todo;
