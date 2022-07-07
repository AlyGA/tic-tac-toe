// Gameboard object
const gameBoard = (() => {
  // Reset button
  const resetBtn = document.querySelector(".resetButton");
  const gameArray = [];
  const boardPieces = document.querySelectorAll(".boardItem");
  boardPieces.forEach((tablerows, i) =>
    tablerows.setAttribute("data-index", i)
  );
  let turn = 0;

  // All the board pieces
  let box0 = document.querySelector(`[data-index="0"]`);
  let box1 = document.querySelector(`[data-index="1"]`);
  let box2 = document.querySelector(`[data-index="2"]`);
  let box3 = document.querySelector(`[data-index="3"]`);
  let box4 = document.querySelector(`[data-index="4"]`);
  let box5 = document.querySelector(`[data-index="5"]`);
  let box6 = document.querySelector(`[data-index="6"]`);
  let box7 = document.querySelector(`[data-index="7"]`);
  let box8 = document.querySelector(`[data-index="8"]`);

  // This is where the controls of the player are held. It will switch from player 1 to player 2.
  let options = boardPieces.forEach((item) => {
    item.addEventListener("click", () => {
      // If a box is already filled, do nothing.
      if (item.textContent !== "") {
        alert("This box is already filled! Pick another box");
        return;
      }

      if (turn % 2 === 0 || turn === 0) {
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

  const gameOver = () => {
    // Make if-else statements to check if there is a three in a row or if it is a draw.
    if (box0.textContent === "X" && box1.textContent === "O") {
      console.log("this works!");
    }
  };

  resetBtn.addEventListener("click", () => {
    boardPieces.forEach((item) => {
      item.textContent = "";
      turn = 0;
      document.querySelector(".player-turn").textContent = "Player 1";
    });
  });

  console.log(gameArray);
  return { options, gameOver };
})();
