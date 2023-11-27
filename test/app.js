"use strict";

let box = document.getElementById("box"),
  btnList = document.getElementsByTagName("button"),
  circleList = document.getElementsByClassName("circle"),
  wrapperHearts = document.querySelector(".wrapper"),
  heartList = document.querySelectorAll(".heart");

// console.log(box);
// console.log(btnList[0]);
// console.log(circleList);
// console.log(heartList);

box.style.backgroundColor = "green";
// box.style.display = "none";

// btnList[1].style.borderRadius = "0%";

for (let i = 0; i < heartList.length; i++) {
  heartList[i].style.backgroundColor = "green";
}

// heartList.forEach(function (item, i, hearts) {
//   item.style.backgroundColor = "green";
// });

let div = document.createElement("div"),
  text = document.createTextNode("jgk");

div.classList.add("black");

// div.innerHTML = `<h1>Hello world</h1>`;
div.textContent = "Hello";

wrapperHearts.appendChild(div);

// document.body.appendChild(div);
