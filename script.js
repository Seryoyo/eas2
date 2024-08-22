const container = document.querySelector("#container");

function createGrid(size){

    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){

            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            container.appendChild(gridSquare);

            gridSquare.setAttribute("style", "width: " + size + "; height: " + size + ";");

        }
}

let grids = document.querySelectorAll(".gridSquare");

grids.forEach((grid) => {

    grid.addEventListener("mouseenter", ()=> {

        grid.setAttribute("style", "background-color: black;");

    })

});

}






let SizeBut = document.querySelector(".gridSize");

SizeBut.addEventListener("click", () => {

    let size = parseInt(prompt("What grid size would you like ? x ?: "));
    createGrid(size);

});

createGrid(45);