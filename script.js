const container = document.querySelector(".container");

let gridSize = 16 * 16
for (let i = 0; i < gridSize; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
}