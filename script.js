const boardPieces = document.querySelectorAll(".boardItem");

boardPieces.forEach((item) => {
  item.addEventListener("click", () => {
    // If a box is already filled, do nothing.
    if (item.textContent !== "") {
      alert("This box is already filled! Pick another box");
      return;
    }

    // Checking to see which option a user picked.
    const choice = prompt("Which would would you pick? Give either an X or O");
    if (choice === "O" || choice === "o") {
      item.textContent = "O";
    } else if (choice === "X" || choice === "x") {
      item.textContent = "X";
    } else {
      alert("Invalid input! Make sure it's an X or O!");
    }
  });
});

// Gameboard object
const gameBoard = (score) => {
  return { score };
};
