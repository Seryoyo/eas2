const container = document.querySelector("#container");

function createGrid(gridSize){

    let gridSquares = document.querySelectorAll(".gridSquare");

    gridSquares.forEach((square) => {
        square.remove();
    });

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){

            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            container.appendChild(gridSquare);

            gridSquare.setAttribute("style", "width: " + ((736/gridSize) - 2) + "px" + "; height: " + ((736/gridSize) - 2) + "px" + ";");

        }
    }

    let grids = document.querySelectorAll(".gridSquare");

    grids.forEach((grid) => {

        grid.addEventListener("mouseenter", () => {

            grid.setAttribute("style", "background-color: black; width: " + ((736/gridSize) - 2) + "px" + "; height: " + ((736/gridSize) - 2) + "px" + ";");

        })

    });

}






let SizeBut = document.querySelector(".gridSize");

SizeBut.addEventListener("click", () => {

    let size = parseInt(prompt("What grid size would you like ? x ?: "));
    if(size > 100){
        size = 100;
    }
    else if(size < 1){
        size = 1;
    }
    createGrid(size);

});

createGrid(16);