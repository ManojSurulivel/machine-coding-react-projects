### QUESTION DESCRIPTION

# Word Omitter:

You are tasked with creating a simple React application called "Word Omitter" that dynamically filters
out specific words from the user input in real-time. The application requirements are detailed below,
and the finished application must pass all of the unit tests.

# Detailed Requirements
1. The WordOmitter component takes an array of words to omit as a prop called omitWords. Each
element of this array is a string representing a word that should be filtered out of the user's
input.
2. The application should display a text input field where the user can type a sentence.
3. As the user types, the output area below the input field should display the sentence with the
specified words omitted.
4. The application should have a toggle button to switch between omitting the specified words and
showing all words.
5. The application should have a clear button that clears both the input field and the output area.
6. If the input field is empty, the output area should also be empty.

### Sample Interaction:

# Initial State
1. The input field is empty.
2. The output area is empty
3. The button displays "Show All Words" i.e. Omit Mode is enabled

# User Action 1
1. User types "This is a test sentence." in the input field.
2. The output area displays "This is test sentence." (assuming "a" is omitted).

# User Action 2
1. User clicks the toggle button.
2. The output area now displays "This is a test sentence." (showing all words).
User Action 3 - User clicks the clear button. - Both the input field and the output area are cleared.