import React, { useState, useEffect } from "react";
import "./Tile.css";

const tilesData = [

    { id: 1, value: "🍎" },
    { id: 2, value: "🍌" },
    { id: 3, value: "🍇" },
    { id: 4, value: "🍓" },
    { id: 5, value: "🍎" },
    { id: 6, value: "🍌" },
    { id: 7, value: "🍇" },
    { id: 8, value: "🍓" },
    { id: 9, value: "🍎" },
    { id: 10, value: "🍌" },
    { id: 11, value: "🍇" },
    { id: 12, value: "🍓" },
    
    ]; 

    
function Tile() {
  const [tiles, setTiles] = useState([]);
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [disableBoard, setDisableBoard] = useState(false);

  useEffect(() => {
    // Shuffle tiles when the component mounts
    const shuffledTiles = [...tilesData].sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
  }, []);

  const handleTileClick = (index) => {
    if (disableBoard || flippedTiles.includes(index)) return;

    const newFlippedTiles = [...flippedTiles, index];
    setFlippedTiles(newFlippedTiles);

    if (newFlippedTiles.length === 3) {
      setDisableBoard(true);

      const [firstIndex, secondIndex, thirdIndex] = newFlippedTiles;
      const firstTile = tiles[firstIndex];
      const secondTile = tiles[secondIndex];
      const thirdTile = tiles[thirdIndex];

      if (
        firstTile.value === secondTile.value &&
        secondTile.value === thirdTile.value
      ) {
        setMatchedTiles([...matchedTiles, firstIndex, secondIndex, thirdIndex]);
      }

      setTimeout(() => {
        setFlippedTiles([]);
        setDisableBoard(false);
      }, 1000);
    }
  };

  const renderTile = (tile, index) => {
    const isFlipped =
      flippedTiles.includes(index) || matchedTiles.includes(index);

    return (
      <div
        key={index}
        className={`tile ${isFlipped ? "flipped" : ""}`}
        onClick={() => handleTileClick(index)}
      >
        {isFlipped ? tile.value : ""}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Match 3 Similar Tiles</h1>
      <div className="grid">
        {tiles.map((tile, index) => renderTile(tile, index))}
      </div>
      {matchedTiles.length === tilesData.length && (
        <div className="win-message">You Won! 🎉</div>
      )}
    </div>
  );
}

export default Tile;
