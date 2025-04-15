const container = document.querySelector(".grid");

function colorTile(e) {
    let tile = e.target;
    tile.style.backgroundColor = "black";
}

let gridSize = 16 * 16
for (let i = 0; i < gridSize; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
    tile.addEventListener("mouseenter", colorTile);
}