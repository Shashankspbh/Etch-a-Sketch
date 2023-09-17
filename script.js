"use strict";
const grid = document.querySelector(".grid");
const slider = document.getElementById("myRange");
const range = document.querySelector(".range");
const blackButton = document.querySelector(".black-button");
const rainbowButton = document.querySelector(".rainbow-button");
const eraserButton = document.querySelector(".eraser-button");

let defaultColour = "black";

const rainbowGenerator = function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

blackButton.addEventListener("click", function (e) {
  defaultColour = "black";
  this.classList.add("selected");
  rainbowButton.classList.remove("selected");
  eraserButton.classList.remove("selected");
});

rainbowButton.addEventListener("click", function () {
  defaultColour = "rainbow";
  this.classList.add("selected");
  eraserButton.classList.remove("selected");
  blackButton.classList.remove("selected");
});

eraserButton.addEventListener("click", function () {
  defaultColour = "white";
  this.classList.add("selected");
  blackButton.classList.remove("selected");
  rainbowButton.classList.remove("selected");
});

const changeBoxColor = function (e) {
  if (defaultColour === "rainbow") {
    this.style.backgroundColor = rainbowGenerator();
  } else {
    this.style.backgroundColor = defaultColour;
  }
};

const createGrid = function (squares, squareNum, squareSide) {
  for (let i = 0; i < squareNum; i++) {
    squares[i] = document.createElement("div");
    squares[i].classList.add("square");
    squares[i].setAttribute("id", i);
    squares[i].style.width = `${squareSide}px`;
    squares[i].style.height = `${squareSide}px`;
    // squares[i].style.border = "1px solid rgb(156, 156, 156)";
    squares[i].addEventListener("mouseover", changeBoxColor);
  }
  for (let j = 0; j < squareNum; j++) {
    grid.appendChild(squares[j]);
  }
};

const updateGrid = function () {
  grid.innerHTML = "";
  range.textContent = `${slider.value}✕${slider.value}`;
  let N = slider.value;
  let squareNum = N * N;
  let squareSide = 500 / squareNum ** 0.5;
  const squares = [];
  createGrid(squares, squareNum, squareSide);
};

updateGrid();
slider.addEventListener("input", updateGrid);
