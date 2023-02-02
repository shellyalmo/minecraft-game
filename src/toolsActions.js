const toolsMaterialsObj = {
  axe: ["wood", "tree"],
  pickaxe: ["stone"],
  shovel: ["sand", "soil"],
};
// console.log(toolsMaterialsObj["axe"][0]);

let activeTool = "";

//update the active tool when clicking a tool
const tools = document.getElementsByClassName("tool");
Array.from(tools).forEach(function (element) {
  element.addEventListener("click", (e) => {
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
    cellClassName = e.target.className;
    cellClassNameArray = cellClassName.split(" ");
    const activeToolClass = document.getElementsByClassName(activeTool);
    const originalStyle = activeToolClass.item(0).style.border;
    if (toolsMaterialsObj[activeTool].includes(cellClassNameArray[1])) {
      e.target.classList.remove(cellClassNameArray[1]);
      activeToolClass.item(0).style.border = "5px solid green";
      setTimeout(function () {
        activeToolClass.item(0).style.border = originalStyle;
      }, 300);
    } else {
      activeToolClass.item(0).style.border = "5px solid red";
      setTimeout(function () {
        activeToolClass.item(0).style.border = originalStyle;
      }, 300);
    }
  });
});
