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

  // Clears the game
  const gridClear = () => {
    box0.textContent = "";
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    gameArray.length = 0;
  };

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
          document.querySelector(".header-title").textContent =
            "Start the game down below!";

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
              gridClear();
            } else if (
              box3.textContent === "X" &&
              box4.textContent === "X" &&
              box5.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();
            } else if (
              box6.textContent === "X" &&
              box7.textContent === "X" &&
              box8.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();
            } else if (
              box0.textContent === "X" &&
              box3.textContent === "X" &&
              box6.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();
            } else if (
              box1.textContent === "X" &&
              box4.textContent === "X" &&
              box7.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();
            } else if (
              box2.textContent === "X" &&
              box5.textContent === "X" &&
              box8.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();
            } else if (
              box1.textContent === "X" &&
              box4.textContent === "X" &&
              box8.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();
            } else if (
              box2.textContent === "X" &&
              box4.textContent === "X" &&
              box6.textContent === "X"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerOne.winsGame()}`;
              gridClear();

              // Scenarios for player 2 winner
            } else if (
              box0.textContent === "O" &&
              box1.textContent === "O" &&
              box2.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box3.textContent === "O" &&
              box4.textContent === "O" &&
              box5.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box6.textContent === "O" &&
              box7.textContent === "O" &&
              box8.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box0.textContent === "O" &&
              box3.textContent === "O" &&
              box6.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box1.textContent === "O" &&
              box4.textContent === "O" &&
              box7.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box2.textContent === "O" &&
              box5.textContent === "O" &&
              box8.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box0.textContent === "O" &&
              box4.textContent === "O" &&
              box8.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            } else if (
              box2.textContent === "O" &&
              box4.textContent === "O" &&
              box6.textContent === "O"
            ) {
              document.querySelector(
                ".header-title"
              ).textContent = `${playerTwo.winsGame()}`;
              gridClear();
            }
            // Tie option
            else if (gameArray.length === 9) {
              document.querySelector(
                ".header-title"
              ).textContent = `It's a tie`;
              gridClear();
            }
          })();
        });
      });

      resetBtn.addEventListener("click", () => {
        boardPieces.forEach((item) => {
          item.textContent = "";
          turn = 0;
          document.querySelector(
            ".player-turn"
          ).textContent = `${playerOne.name}`;
          document.querySelector(".header-title").textContent =
            "Start the game down below!";
          gameArray.length = 0;
        });
      });

      console.log(gameArray);
      startBtn.disabled = true;
      return { options, playerOne, playerTwo };
    }
  });
})();
