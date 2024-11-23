import React, { useState } from "react";
import NewChange from  './Projects/StateAndProps/NewChange.jsx';

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <div className="App">
        <h1>State and Props</h1>
        <input
          id="userName"
          type="text"
          onChange={(e)=> setUser(e.target.value)}
          placeholder="enter your name"
        />
        <h1>Hello everyone my name is {user}</h1>
        <h2>Start editing to see some magic happen!{user}</h2>
        <NewChange setUser={setUser} />
      </div>
    </>
  );
}

export default App