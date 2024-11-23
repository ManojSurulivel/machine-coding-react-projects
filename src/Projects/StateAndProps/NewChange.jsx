import React from "react";

function NewChange({setUser}) {
  const handleChange = () => {
    setUser("there");
  };
  return (
    <div className="App">
      <button onClick={handleChange}>HandleChange</button>
    </div>
  );
}
export default NewChange