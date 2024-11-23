import React, { useState } from "react";
import "./ColorBoxes.css";

const ColorBoxes = () => {
  const [boxes, setBoxes] = useState([{ id: 1, color: "#ff5733" }]);
  const [newColor, setNewColor] = useState("");

  const addBox = () => {
    const id = boxes.length ? boxes[boxes.length - 1].id + 1 : 1;
    setBoxes([...boxes, { id, color: newColor || "#000" }]);
    setNewColor("");
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  const handleColorChange = (id, color) => {
    setBoxes(
      boxes.map((box) => (box.id === id ? { ...box, color } : box))
    );
  };

  return (
    <div className="app">
      <h1>Configurable Color Boxes</h1>
      <div className="controls">
        <input
          type="color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <button onClick={addBox}>Add Box</button>
      </div>
      <div className="box-container">
        {boxes.map((box) => (
          <div key={box.id} className="box-item">
            <div
              className="color-box"
              style={{ backgroundColor: box.color }}
            ></div>
            <input
              type="color"
              value={box.color}
              onChange={(e) => handleColorChange(box.id, e.target.value)}
            />
            <button onClick={() => removeBox(box.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxes;
