const container = document.querySelector("#container");

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){

        let gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "gridSquare");
        container.appendChild(gridSquare);

    }
}

let grids = document.querySelectorAll(".gridSquare");

grids.forEach((grid) => {

    grid.addEventListener("mouseenter", ()=> {

        grid.setAttribute("style", "background-color: black;");

    })

});