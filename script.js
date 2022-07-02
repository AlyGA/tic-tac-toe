// Gameboard object
const gameBoard = (() => {
  const gameArray = [];
  const boardPieces = document.querySelectorAll(".boardItem");

  // Event listener to allow user to choose their X or O option.
  let options = boardPieces.forEach((item) => {
    item.addEventListener("click", () => {
      // If a box is already filled, do nothing.
      if (item.textContent !== "") {
        alert("This box is already filled! Pick another box");
        return;
      }

      // Checking to see which option a user picked.
      const choice = prompt(
        "Which would would you pick? Give either an X or O"
      );
      if (choice === "O" || choice === "o") {
        item.textContent = "O";
        gameArray.push(item.textContent);
      } else if (choice === "X" || choice === "x") {
        item.textContent = "X";
        gameArray.push(item.textContent);
      } else {
        alert("Invalid input! Make sure it's an X or O!");
      }
    });
  });

  // Checks to see if the game is over
  const gameOver = () => {
    //....
  };

  console.log(gameArray);
  return { options };
})();

const players = (player) => {
  player = 1;
};
