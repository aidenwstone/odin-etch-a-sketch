const container = document.querySelector(".grid");

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

// Run intial grid creation
createGrid(16);