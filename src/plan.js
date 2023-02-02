// 2d array for generating the world
//each number is a different material (wood,soil...)
const board= [[0], [0], [0], [0], [0], [0]][([], [1], [], [], [], [])][
  ([], [], [], [1], [], [])
][([], [2], [], [], [], [])][([3], [], [], [], [2], [])];

const game = document.getElementById("game-screen")
/**creating the world */
function createWorld(){
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            const cell = document.createElement("div")
            switch(board[i][j]){
                case 1:
                    cell.classList.add("dirt")
                    // cell.addEventListener("click",function(e){
                    //     e.target.
                    
                    game.appendChild(cell)
                    break;
                case 2: //wood
                    cell
            }
        }
    }
}

/**css example */
.box{
    width:
    height:

}
.soil{
    background-img:
}


// nested for loop on the 2d array
// give each cell a css class with styling (background img, size)
// create element for each cell + append child
// set class list/ attribute for each cell
// each cell gets an event listener (click)
// e.target = we get the cell
// switch case on each cell = check which class it is

/**actions inside the world */
// current tool variable= saves the current tool (after click)
// when clicking a cell = compare to the current tool
// if it matches = set the cell's class to sky class
// save in array of inventory

/**inventory usage */
// array.pop = get the last one from the inventory array
// click event
// check where its clicked, if the right place:
//to add the cell on the board
// else show warning

/**rest world */
// initializes all with createWorld()
