"use strict";
//Get the grid element
const grid = document.querySelector(".grid");

//create 16 squares
const N = 20;
const squareNum = N * N;
const squareSide = 600 / squareNum ** 0.5;

const squares = [];
for (let i = 0; i < squareNum; i++) {
  squares[i] = document.createElement("div");
  squares[i].classList.add("square");
  squares[i].setAttribute("id", i);
  //   squares[i].style.width = "150px";
  //   squares[i].style.height = "auto";
  squares[i].style.width = `${squareSide}px`;
  squares[i].style.height = `${squareSide}px`;

  squares[i].style.border = "1px solid rgb(156, 156, 156)";
}
for (let j = 0; j < squareNum; j++) {
  grid.appendChild(squares[j]);
}
