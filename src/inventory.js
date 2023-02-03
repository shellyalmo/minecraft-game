let inventory = [];
const inventoryDiv = document.querySelector(".inventory");

/**
 * add cell to inventory array
 */
function addToInventory(className) {
  inventory.push(className);
  // change inventory div img
  let url = `../assets/cells/${className}.png`;
  inventoryDiv.style.backgroundImage = "url(" + url + ")";
}

//update the currentTileFromInventory when clicking on the inventory
inventoryDiv.addEventListener("click", (e) => {
  mode = "inventory";
});

Array.from(cells).forEach(function (element) {
  element.addEventListener("click", (e) => {
    if (mode === "inventory") {
      e.target.classList.add(inventory.pop());
    }
  });
});
