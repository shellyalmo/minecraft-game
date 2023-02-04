// mode: harvesting or inventory
let mode = "";

const toolsMaterialsObj = {
  axe: ["wood", "tree"],
  pickaxe: ["stone"],
  shovel: ["sand", "soil", "grass"],
};

let activeTool = "";

//update the active tool when clicking a tool
const tools = document.getElementsByClassName("tool");
Array.from(tools).forEach(function (element) {
  element.addEventListener("click", (e) => {
    mode = "harvesting";
    activeTool = e.target.className;

    activeTool = activeTool.slice(0, activeTool.indexOf(" "));
  });
});

/**
 * check what is the active tool when clicking on a cell
 */
const cells = document.getElementsByClassName("sky");
Array.from(cells).forEach(function (element) {
  element.addEventListener("click", (e) => {
    if (mode === "harvesting") {
      let cellClassName = e.target.className;
      let cellClassNameArray = cellClassName.split(" ");
      const activeToolClass = document.getElementsByClassName(activeTool);
      const originalStyle = activeToolClass.item(0).style.border;

      if (toolsMaterialsObj[activeTool].includes(cellClassNameArray[1])) {
        e.target.classList.add("shake");
        setTimeout(function () {
          e.target.classList.remove("shake");
          e.target.classList.remove(cellClassNameArray[1]);
        }, 250);

        activeToolClass.item(0).style.border = "5px solid green";
        setTimeout(function () {
          activeToolClass.item(0).style.border = originalStyle;
        }, 100);
        addToInventory(cellClassNameArray[1]);
      } else {
        activeToolClass.item(0).style.border = "5px solid red";
        setTimeout(function () {
          activeToolClass.item(0).style.border = originalStyle;
        }, 100);
      }
    }
  });
});
