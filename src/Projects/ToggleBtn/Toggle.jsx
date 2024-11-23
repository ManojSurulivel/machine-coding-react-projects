import React, { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: toggle ? "black" : "white",
          color: toggle ? "white" : "black",
        }}
      >
        Toggle Click
      </button>
    </div>
  );
}

export default ToggleBtn;
