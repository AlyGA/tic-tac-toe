class Player {
  constructor(name) {
    this.name = name;
  }

  winsGame() {
    return `${this.name} Wins!`;
  }
}

// Gameboard object
const gameBoard = (() => {
  document.querySelector(".player-turn").textContent = `Press Start to Begin!`;

  // Start button
  const startBtn = document.querySelector(".startButton");
  startBtn.disabled = false;
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

  // This starts the game and can only be pressed once.
  startBtn.addEventListener("click", () => {
    if (startBtn.disabled === false) {
      //Create players
      let playerOne = new Player(prompt("Enter Player 1's name:"));
      let playerTwo = new Player(prompt("Enter Player 2's Name:"));
      document.querySelector(
        ".playerOneName"
      ).textContent = `${playerOne.name} = X`;
      document.querySelector(
        ".playerTwoName"
      ).textContent = `${playerTwo.name} = O`;

      // Set player name
      document.querySelector(".player-turn").textContent = `${playerOne.name}`;

      // This is where the controls of the player are held. It will switch from player 1 to player 2.
      let options = boardPieces.forEach((item) => {
        item.addEventListener("click", function optionItem() {
          // If a box is already filled, do nothing.
          if (item.textContent !== "") {
            alert("This box is already filled! Pick another box");
            return;
          }

          if (turn % 2 === 0 || turn === 0) {
            item.textContent = "X";
            document.querySelector(
              ".player-turn"
            ).textContent = `${playerTwo.name}`;
            gameArray.push(item.textContent);
          }

          if (turn % 2 !== 0) {
            item.textContent = "O";
            document.querySelector(
              ".player-turn"
            ).textContent = `${playerOne.name}`;
            gameArray.push(item.textContent);
          }
          turn++;

          // Check the game to see if there is an Xs or Os.
          const checkGame = (() => {
            // All scenarios if player one wins
            if (
              box0.textContent === "X" &&
              box1.textContent === "X" &&
              box2.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              boardPieces.forEach(item, () => {
                item.removeEventListener("click");
              });
            } else if (
              box3.textContent === "X" &&
              box4.textContent === "X" &&
              box5.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
            } else if (
              box6.textContent === "X" &&
              box7.textContent === "X" &&
              box8.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
            } else if (
              box0.textContent === "X" &&
              box3.textContent === "X" &&
              box6.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
            } else if (
              box1.textContent === "X" &&
              box4.textContent === "X" &&
              box7.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
            } else if (
              box2.textContent === "X" &&
              box5.textContent === "X" &&
              box8.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
            } else if (
              box1.textContent === "X" &&
              box4.textContent === "X" &&
              box8.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
            } else if (
              box2.textContent === "X" &&
              box4.textContent === "X" &&
              box6.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;

              // Scenarios for player 2 winner
            } else if (
              box0.textContent === "O" &&
              box1.textContent === "O" &&
              box2.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box3.textContent === "O" &&
              box4.textContent === "O" &&
              box5.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box6.textContent === "O" &&
              box7.textContent === "O" &&
              box8.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box0.textContent === "O" &&
              box3.textContent === "O" &&
              box6.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box1.textContent === "O" &&
              box4.textContent === "O" &&
              box7.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box2.textContent === "O" &&
              box5.textContent === "O" &&
              box8.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box0.textContent === "O" &&
              box4.textContent === "O" &&
              box8.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
            } else if (
              box2.textContent === "O" &&
              box4.textContent === "O" &&
              box6.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;

              // Tie option
            }
          })();
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
          document.querySelector(".header-title").textContent =
            "Start the game down below!";
        });
      });

      console.log(gameArray);
      startBtn.disabled = true;
      return { options, gameOver, playerOne, playerTwo };
    }
  });
})();
