# Nested DropDown Project - React Project

# Here’s how you can create a React project where clicking a country displays its states, and clicking a state displays its cities. This demonstrates nested conditional rendering and state management in React.


1. Data Structure:

The data array contains nested objects for countries, states, and cities.

2. State Management:

selectedCountry: Tracks the selected country.

selectedState: Tracks the selected state within a country.

3. Dynamic Rendering:

Clicking on a country toggles its states,
Clicking on a state toggles its cities.

4. Styling:

Each level (countries, states, cities) is visually distinct and indented.

# How to Run

1. Create a React app:

npx create-react-app nested-list

cd nested-list

2. Replace the contents of App.js and App.css with the provided code.

3. Start the app:

npm start

Output:

* The app displays a list of countries.

* Clicking on a country reveals its states.

* Clicking on a state reveals its cities.

* This project demonstrates React's ability to handle nested data with conditional rendering and dynamic state management.





