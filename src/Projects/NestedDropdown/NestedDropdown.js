import React, { useState } from "react";
import "./NestedDropdown.css";

const data = [
  {
    country: "USA",
    states: [
      {
        name: "California",
        cities: ["Los Angeles", "San Francisco", "San Diego"],
      },
      {
        name: "Texas",
        cities: ["Houston", "Dallas", "Austin"],
      },
      {
        name: "Florida",
        cities: ["Miami", "Orlando", "Tampa"],
      },
    ],
  },
  {
    country: "India",
    states: [
      {
        name: "Tamil Nadu",
        cities: ["Chennai", "Madurai", "Coimbatore"],
      },
      {
        name: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur"],
      },
      {
        name: "Karnataka",
        cities: ["Bengaluru", "Mysore", "Hubli"],
      },
    ],
  },
  {
    country: "Australia",
    states: [
      {
        name: "New South Wales",
        cities: ["Sydney", "Newcastle", "Wollongong"],
      },
      {
        name: "Victoria",
        cities: ["Melbourne", "Geelong", "Ballarat"],
      },
      {
        name: "Queensland",
        cities: ["Brisbane", "Gold Coast", "Cairns"],
      },
    ],
  },
];

function NestedDropdown() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country === selectedCountry ? null : country);
    setSelectedState(null); // Reset state selection when a new country is clicked
  };

  const handleStateClick = (state) => {
    setSelectedState(state === selectedState ? null : state);
  };

  return (
    <div className="App">
        <h1>NestedDropdown</h1>
      <p>Countries, States, and Cities ⬇️</p>
      <ul className="countries">
        {data.map((country) => (
          <li key={country.country}>
            <button
              className="country-button"
              onClick={() => handleCountryClick(country.country)}
            >
              {country.country}
            </button>
            {selectedCountry === country.country && (
              <ul className="states">
                {country.states.map((state) => (
                  <li key={state.name}>
                    <button
                      className="state-button"
                      onClick={() => handleStateClick(state.name)}
                    >
                      {state.name}
                    </button>
                    {selectedState === state.name && (
                      <ul className="cities">
                        {state.cities.map((city) => (
                          <li key={city} className="city-item">
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NestedDropdown;
