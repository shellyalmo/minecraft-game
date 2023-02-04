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
    return neighborElement.classList.length > 1; //TODO: exclude cloud
  }
  const left = isMoreThanSky(cellElement.previousSibling);
  const right = isMoreThanSky(cellElement.nextSibling);

  const neighbors = [left, right];

  return neighbors.includes(true);
}

//update the currentTileFromInventory when clicking on the inventory
inventoryDiv.addEventListener("click", (e) => {
  mode = "inventory";
});

Array.from(cells).forEach(function (element) {
  element.addEventListener("click", (e) => {
    const isOnlySky = e.target.classList.length === 1;
    //TODO
    if (mode === "inventory" && isOnlySky && hasNeighbor(e.target)) {
      e.target.classList.add(inventory.pop());
      if (inventory.length > 0) {
        let url = `../assets/cells/${inventory[inventory.length - 1]}.png`;
        inventoryDiv.style.backgroundImage = "url(" + url + ")";
      } else {
        inventoryDiv.style.backgroundImage = "none";
      }
    } //else make border red
  });
});
