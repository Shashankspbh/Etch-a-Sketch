"use strict";
//Get the grid element
const grid = document.querySelector(".grid");
const slider = document.getElementById("myRange");
const range = document.querySelector(".range");

const changeBoxColor = function (e) {
  this.style.backgroundColor = "black";
};

const createGrid = function (squares, squareNum, squareSide) {
  for (let i = 0; i < squareNum; i++) {
    squares[i] = document.createElement("div");
    squares[i].classList.add("square");
    squares[i].setAttribute("id", i);
    //   squares[i].style.width = "150px";
    //   squares[i].style.height = "auto";
    squares[i].style.width = `${squareSide}px`;
    squares[i].style.height = `${squareSide}px`;

    squares[i].style.border = "1px solid rgb(156, 156, 156)";
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
  let squareSide = 600 / squareNum ** 0.5;
  const squares = [];
  createGrid(squares, squareNum, squareSide);
};

updateGrid();
slider.addEventListener("input", updateGrid);
//create 16 squares
