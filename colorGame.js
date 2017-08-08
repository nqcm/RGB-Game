var numofSquares = 6;
var colors = generateRandomColors(numofSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerDisplay = document.querySelector(".header");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numofSquares = 3;
  colors = generateRandomColors(numofSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for (i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numofSquares = 6;
  colors = generateRandomColors(numofSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for (i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numofSquares);
  // pick a new random color from an array
  pickedColor = pickRandomColor();
  //chand colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  headerDisplay.style.backgroundColor = "#232323";
});

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      changeColor(pickedColor);
      messageDisplay.textContent = "Correct!";
      headerDisplay.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColor(color) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickRandomColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num) {
  var arr = [];
  for (i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g + ", " + b + ")";
}
