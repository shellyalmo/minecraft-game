//click inventory div --> going to function addCell()
//addCell()

let inventory = [];
const inventoryDiv = document.querySelector(".inventory");
let currentTileFromInventory = "";

/**
 * add cell to inventory array
 */
export default function addToInventory(className) {
  inventory.push(className);
  // change inventory div img
  let url = `../assets/cells/${className}.png`;
  inventoryDiv.style.backgroundImage = "url(" + url + ")";
}

//update the currentTileFromInventory when clicking on the inventory
inventoryDiv.addEventListener("click", (e) => {
  currentTileFromInventory = e.target.className;
  currentTileFromInventory = currentTileFromInventory.split(" ")[1];
});
