// Gameboard object
const gameBoard = (() => {
  const gameArray = [];
  const boardPieces = document.querySelectorAll(".boardItem");
  let turn = 0;

  // This is where the controls of the player are held. It will switch from player 1 to player 2.
  let options = boardPieces.forEach((item) => {
    item.addEventListener("click", () => {
      // If a box is already filled, do nothing.
      if (item.textContent !== "") {
        alert("This box is already filled! Pick another box");
        return;
      }

      if (turn % 2 === 0) {
        item.textContent = "X";
        document.querySelector(".player-turn").textContent = "Player 2";
        gameArray.push(item.textContent);
      }

      if (turn % 2 !== 0) {
        item.textContent = "O";
        document.querySelector(".player-turn").textContent = "Player 1";
        gameArray.push(item.textContent);
      }
      turn++;
    });
  });

  // Checks to see if the game is over
  const gameOver = () => {
    //....
  };

  console.log(gameArray);
  return { options, gameOver };
})();
