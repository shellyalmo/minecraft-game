let inventory = [];
const inventoryDiv = document.querySelector(".inventory-box");

/**
 * add cell to inventory array
 */
function addToInventory(className) {
  inventory.push(className);
  // change inventory div img
  let url = `../assets/cells/${className}.png`;
  inventoryDiv.style.backgroundImage = "url(" + url + ")";
}

/**
 * checks if the cell on the board has at least one neighboring cell (left, right,top,bottom)
 * @param {HTMLElement} cellElement
 * @returns {boolean}
 */
function hasNeighbor(cellElement) {
  function isMoreThanSky(neighborElement) {
    return (
      neighborElement.classList.length > 1 &&
      !neighborElement.classList.contains("cloud")
    );
  }
  //check left and right
  const leftCol = Number(cellElement.getAttribute("data-col")) - 1;
  const rightCol = Number(cellElement.getAttribute("data-col")) + 1;
  //same row for left and right
  const row = Number(cellElement.getAttribute("data-row"));
  const left = isMoreThanSky(
    document.querySelector(`div[data-row="${row}"][data-col="${leftCol}"]`)
  );
  const right = isMoreThanSky(
    document.querySelector(`div[data-row="${row}"][data-col="${rightCol}"]`)
  );
  //check top and bottom
  const topRow = Number(cellElement.getAttribute("data-row")) - 1;
  const bottomRow = Number(cellElement.getAttribute("data-row")) + 1;
  //same column for top and bottom
  const col = Number(cellElement.getAttribute("data-col"));
  const top = isMoreThanSky(
    document.querySelector(`div[data-row="${topRow}"][data-col="${col}"]`)
  );
  const bottom = isMoreThanSky(
    document.querySelector(`div[data-row="${bottomRow}"][data-col="${col}"]`)
  );
  const neighbors = [left, right, top, bottom];

  return neighbors.includes(true);
}

//update the currentTileFromInventory when clicking on the inventory
inventoryDiv.addEventListener("click", (e) => {
  mode = "inventory";
});

Array.from(cells).forEach(function (element) {
  element.addEventListener("click", (e) => {
    const isOnlySky =
      e.target.classList.length === 1 ||
      (!e.target.classList.contains("tree") &&
        !e.target.classList.contains("wood") &&
        !e.target.classList.contains("soil") &&
        !e.target.classList.contains("cloud") &&
        !e.target.classList.contains("sand") &&
        !e.target.classList.contains("stone"));

    const originalStyleInventory = inventoryDiv.style.border;
    if (mode === "inventory" && isOnlySky && hasNeighbor(e.target)) {
      inventoryDiv.style.border = "5px solid green";
      setTimeout(function () {
        inventoryDiv.style.border = originalStyleInventory;
      }, 300);
      e.target.classList.add(inventory.pop());
      if (inventory.length > 0) {
        let url = `../assets/cells/${inventory[inventory.length - 1]}.png`;
        inventoryDiv.style.backgroundImage = "url(" + url + ")";
      } else {
        inventoryDiv.style.backgroundImage = "none";
      }
    } else if (mode === "inventory") {
      inventoryDiv.style.border = "5px solid red";
      setTimeout(function () {
        inventoryDiv.style.border = originalStyleInventory;
      }, 300);
    }
  });
});
