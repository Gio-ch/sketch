const DefaultSize = 32;
var currentSize = DefaultSize;

var grid = document.getElementsByClassName("grid-wrapper")[0];
var resetButton = document.getElementsByClassName("reset")[0];
var sizeButton = document.getElementsByClassName("size-change")[0];
var colorButton = document.getElementsByClassName("color-full")[0];
var pads = grid.childNodes;

// Create size X size grid
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (var i = 0; i < size * size; i++) {
    var pad = document.createElement("div");
    pad.classList.add("pad");
    grid.appendChild(pad);
  }
}
function resetGrid() {
  grid.innerHTML = " ";
}
function promptSize() {
  currentSize = prompt("enter size: ", 16);
  while (currentSize > 100 || currentSize <= 0)
    currentSize = prompt("Less than 100 please: ", 16);
}
function updateSize() {
  promptSize();
  resetGrid();
  createGrid(currentSize);
  pads = grid.childNodes;
  colorSelectedPads();
}

function colorMePure(ev) {
  const someColor = randColor();
  ev.target.classList.add("colored");  
}
function colorSelectedPads() {
  pads.forEach(function (element) {
    element.addEventListener("mouseover", colorMePure);
  });
}

function resetPadColors() {
	resetGrid();
  	createGrid(currentSize);
  	pads = grid.childNodes;
	colorSelectedPads();
}

createGrid(DefaultSize);



// Set up event listener for hover effect
colorSelectedPads();

// Reset functionality
resetButton.addEventListener("click", resetPadColors);


