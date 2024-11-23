import React, { useState, useEffect } from "react";
import "./Autocomplete.css";

const Autocomplete = ({ placeholder, fetchSuggestions }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounced Fetch Suggestions
  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        const data = await fetchSuggestions(query);
        setSuggestions(data);
        setHighlightIndex(-1);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const debounceFetch = setTimeout(fetchData, 300);
    return () => clearTimeout(debounceFetch);
  }, [query, fetchSuggestions]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      setQuery(suggestions[highlightIndex]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={index === highlightIndex ? "highlight" : ""}
              onClick={() => {
                setQuery(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
