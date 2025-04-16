const container = document.querySelector(".grid");
const newGridButton = document.getElementById("newGrid");

function colorTile(e) {
    let tile = e.target;
    tile.style.backgroundColor = "black";
}

function createGrid(squaresPerSide) {
    let gridSize = squaresPerSide ** 2;

    container.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
        tile.addEventListener("mouseenter", colorTile);
        tile.style.cssText += `flex-basis: calc(100% / ${squaresPerSide})`;
    }
}

newGridButton.addEventListener("click", () => {
    let size = parseInt(prompt("Enter the number of squares per side: "));

    while (Number.isNaN(size) || size < 1 || size > 100) {
        alert("Invalid, must be number from 1-100.");
        size = parseInt(prompt("Enter the number of squares per side: "));
    }
    createGrid(size);
})

// Run intial grid creation
createGrid(16);