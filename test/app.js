"use strict";
//! События

// let btnList = document.querySelectorAll("button"),
//   wrap = document.querySelector(".wrapper"),
//   link = document.querySelector("a");
// btnList[0].onclick = function () {
//   alert("Привет мир!");
// };

// btnList[0].addEventListener("mouseenter", function () {
//   alert("Привет мир!");
//   //   alert("Привет мир2!");
// });

// btnList[0].addEventListener("click", function (event) {
//   console.log("Событие:: " + event.type + " на элементе " + event.target);
// });

// wrap.addEventListener("click", function (event) {
//   console.log("Событие:: " + event.type + " на элементе " + event.target);
// });

// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Событие:: " + e.type + " на элементе " + e.target);
// });

// btnList.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // e.preventDefault();
//     console.log("Событие:: " + e.type + " на элементе " + e.target);
//   });
// });

//! Параметры документа
let box = document.querySelector(".box"),
  btn = document.querySelector("button");

// let width = box.clientWidth,
//   height = box.clientHeight;

// let width = box.offsetWidth,
//   height = box.offsetHeight;

btn.addEventListener("click", function () {
  //   box.style.height = box.scrollHeight + "px";
  //   console.log(box.scrollTop);
  //   box.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;

  //   document.documentElement.scrollBy(0, 200);
  document.documentElement.scrollTo(0, 200);
});

// console.log(width);
// console.log(height);
// console.log(box.getBoundingClientRect());

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop);
