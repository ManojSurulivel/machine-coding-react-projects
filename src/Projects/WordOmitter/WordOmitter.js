import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText(""); // Clear input text
  };

  const getProcessedText = () => {
    if (!omitWords || !inputText.trim()) {
      return inputText; // Show all words if omitWords is false or input is empty
    }

    // Process input text by omitting specified words
    return inputText
      .split(" ") // Split text into words
      .filter((word) => !OMITTED_WORDS.includes(word.toLowerCase())) // Filter out omitted words
      .join(" "); // Join the words back into a sentence
  };

  return (
    <div className="omitter-wrapper" style={{width:"300px",height:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", margin:"20px",padding:"10px",border:"1px solid black",borderRadius:"2px",}}>
        <h1>Word Omitter</h1>
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div style={{margin:"12px"}}>
        <button onClick={toggleOmitWords} data-testid="action-btn" style={{backgroundColor:"green",color:"white",border:"1px solid black",borderRadius:"5px" }}>
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn" style={{margin:"12px",backgroundColor:"red",color:"white",border:"1px solid black",borderRadius:"5px"}}>
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
