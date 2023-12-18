function drawGrid(gridCount){
    //creates the grid
    const DRAWINGGRID = document.querySelector(".drawingBoard");
    const Previouselements = document.querySelectorAll(".square")
    Previouselements.forEach((sq) =>{
        DRAWINGGRID.removeChild(sq);
    })
    for (let repetetions = 1; repetetions <= gridCount * gridCount; repetetions++){
        const grid = document.createElement('div');
        grid.classList.add("square")
        const divided = (256/gridCount);
        grid.style.cssText = `background-color: White; height:${divided-2}px; width:${divided-2}px; border: solid; border-width: 1px; border-color: black;`;
        DRAWINGGRID.appendChild(grid);
    }
}

function colorIn(color, squares){
    squares.forEach((sq) => {
        sq.addEventListener('mouseover', () => {
            sq.style.backgroundColor = color;
        }
        )
    })
}




//Main

//Default Action
let gridCount = 16;
drawGrid(gridCount);
let squares = document.querySelectorAll(".square");
colorIn("Black",squares);

//Main event 


//changes the color
const CHANGECOLORBUTTON = document.querySelector(".changeColor");
let prevColor = "Black";
CHANGECOLORBUTTON.addEventListener("click", () => {let changedColor = prompt("type in Blue")
    colorIn(changedColor, squares);
    prevColor = changedColor
})

//clear board
const CLEARBUTTON = document.querySelector(".clear");
CLEARBUTTON.addEventListener("click", () => {
    squares.forEach((sq) => {sq.style.backgroundColor = "White"})
});

//change resolution
const RESOLUTIONCHANGEBUTTON = document.querySelector(".changeResolution");
RESOLUTIONCHANGEBUTTON.addEventListener("click", () => {
    let userInput = prompt("Enter the width of the grid");
    while(isNaN(userInput)){
        userInput = prompt("You did not enter a number, please try again.")
    }
    drawGrid(userInput)
    squares = document.querySelectorAll(".square");
    colorIn(prevColor, squares);
});












