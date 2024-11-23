import React from "react";
import Autocomplete from "./components/Autocomplete";
import { staticSuggestions } from "./data/suggestions"; // Optional for static data

const fetchSuggestions = async (query) => {
  // Mocking an API call using static data
  return staticSuggestions.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase())
  );

  // Uncomment below code for real API
  // const response = await axios.get(`https://api.example.com/search?q=${query}`);
  // return response.data.suggestions;
};

function AutocompleteComponent() {
  return (
    <div style={{ padding: "20px", display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
      <h1>Autocomplete / Typeahead</h1>
      <h3 style={{color:"red"}}>Search for fruits Name here</h3>
      <Autocomplete
        placeholder="Search for fruits..."
        fetchSuggestions={fetchSuggestions}
      />
    <p style={{padding: "50px", color:"green", fontFamily:"sans-serif"}}>The autocomplete (typeahead) component allows users to type in an input field and see suggestions or filtered results based on their input.</p>

    </div>
  );
}

export default AutocompleteComponent;
