# POLLWIDGET - React Project

# Sure! Here's a full working example for a Poll Widget in React, where a user can vote on a poll, and the results are displayed once the user votes. The results are stored locally, so they persist across page reloads.

/src
  |-- /components
      |-- PollWidget.js
      |-- PollResults.js
  |-- App.js
  |-- App.css
  |-- index.js


1. PollWidget.js (Main Poll Voting Component).

* This component will display the poll options and handle user voting.

2. PollResults.js (Results Display Component)

* This component will show the results after the user votes.

# Poll Widget (System Design) - React Project

Let's review and fix any potential issues in the PollWidget and PollResults components. The problem you're describing could arise from several issues such as state management, rendering of components, or user voting logic.

A Poll Widget allows users to vote on a given set of options, view results dynamically, and interact with real-time data updates. Here's how to build a feature-rich Poll Widget using React.

* Features
1. Display a question with multiple options.
2. Allow users to vote on an option.
3. Display results dynamically (percentage and total votes).
4. Prevent duplicate votes using localStorage or session management.
5. Configurable to fetch poll data from a server or use static data.

# Let's go step by step:

1. Handling Initial State:
The useState hook should initialize the votes array with 0s corresponding to the number of options, and you must check if the user has already voted. Additionally, we need to ensure that the state persists in localStorage and is used correctly.

2. Updating and Displaying Results:
The main issue could be the state update or the way the PollResults is rendered. If you try to vote more than once, the results might not reflect that the user has voted.

3. Code Fixes
Let me provide a fully working version of the code to handle the issue and make sure everything functions properly.



# Key Changes & Fixes:
1. State Initialization (useEffect):

On useEffect, the component will check if there are any votes stored in localStorage and load them if available. If not, it initializes the votes array with zeros based on the number of options.

2. User Voting Logic (handleVote):

Once the user votes, the handleVote function updates the votes array and saves it in localStorage.
We prevent the user from voting more than once with the userVoted flag.

3. Rendering Poll Results:

If the user has voted (userVoted is true), the PollResults component will be shown to display the results.
If the user has not voted yet, they can click on the options to vote.

4. Handling Total Votes & Percentages:

The PollResults component calculates the total votes and displays the percentage for each option based on the current votes.


# Explanation

* PollResults.js: This component accepts two props:

1. options: The list of poll options.
2. votes: An array containing the number of votes for each option.
3. It calculates and displays the total number of votes and the percentage breakdown for each option.

* PollWidget.js: The main widget component that:

1. Handles user voting logic.
2. Displays the poll options until the user votes.
3. After voting, it displays the PollResults component to show the poll's results.


# Key Features
1. Local Storage: Prevent duplicate voting by tracking votes in the browser.

2. Dynamic Percentages: Display vote percentages and counts in real-time.

3. Customizable: Easily adapt for different questions or data sources.

4. Responsive Design: Ensures it looks great on all devices.