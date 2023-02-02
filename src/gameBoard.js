// all needs to be blue sky and then add layers
// 0= blue sky, 1=cloud, 2=wood,3=tree,4=soil,5=sand,6=stone
const gameArray = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3],
  [0, 0, 0, 4, 4, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [5, 5, 5, 4, 4, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [5, 5, 5, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 5, 2, 5, 5],
  [6, 6, 6, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 4, 4, 5, 5, 5, 6],
  [6, 6, 6, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6],
];

const gameBoard = document.getElementById("cells-board");

/**
 * generate elements of the board with their css classes
 */
function createBoard() {
  for (let i = 0; i < gameArray.length; i++) {
    for (let j = 0; j < gameArray[i].length; j++) {
      const cell = document.createElement("div");
      gameBoard.appendChild(cell);

      cell.classList.add("sky");
      switch (gameArray[i][j]) {
        case 1:
          cell.classList.add("cloud");
          break;
        case 2:
          cell.classList.add("wood");
          break;
        case 3:
          cell.classList.add("tree");
          break;
        case 4:
          cell.classList.add("soil");
          break;
        case 5:
          cell.classList.add("sand");
          break;
        case 6:
          cell.classList.add("stone");
          break;
      }
    }
  }
}

createBoard();
