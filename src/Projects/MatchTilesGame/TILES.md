# Match Tiles Game 🎮 - React Project

# To modify the "Match Similar Tiles" project so that you need to match 3 tiles instead of 2 to make a successful match, you can adjust the logic in the game. Here's the updated project:

1. Matching Logic:

* Now the game requires 3 tiles to match instead of 2.
* Logic compares the content of 3 flipped tiles.

2. Tile Data:

Increased tile count to ensure there are three copies of each content (A, B, C, D).

3. State Updates:

If a match is found, all three indices are added to the matchedTiles array.

4. Winning Condition:

The game checks if all tiles have been matched by comparing the length of matchedTiles to tilesData.

# How to Run
1. Replace the previous App.js and App.css files with the code above.

2. Start the app using:

npm start

# Output: 

* The game now requires players to match 3 tiles with the same content.

* Flipping 3 matching tiles keeps them flipped, while mismatched tiles flip back.

* A congratulatory message appears upon matching all tiles.

* Enjoy your enhanced "Match 3 Similar Tiles" React project! 🎮
