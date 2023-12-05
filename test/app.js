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
// let box = document.querySelector(".box"),
//   btn = document.querySelector("button");

// let width = box.clientWidth,
//   height = box.clientHeight;

// let width = box.offsetWidth,
//   height = box.offsetHeight;

// btn.addEventListener("click", function () {
//   //   box.style.height = box.scrollHeight + "px";
//   //   console.log(box.scrollTop);
//   //   box.scrollTop = 0;
//   //   document.documentElement.scrollTop = 0;

//   //   document.documentElement.scrollBy(0, 200);
//   document.documentElement.scrollTo(0, 200);
// });

// console.log(width);
// console.log(height);
// console.log(box.getBoundingClientRect());

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop);

//! Конструкторы и классы
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Привет! " + this.name);
//   };
// }

// User.prototype.exit = function (name) {
//   console.log("Пользователь " + this.name + " ушёл");
// };

// let Ivan = new User("Ivan", 25);

// let Alex = new User("Alex", 20);

// console.log(Ivan.exit());
// console.log(Alex);

//! This
//? 1) Просто вызов функции
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return this.a + this.b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

//? 2) Метод объекта this = объект
// let obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   },
// };
// obj.sum();

//? 3) Конструктор (new) - this = новый созданный объект

//? 4) Жесткая привязка контекста - call, applay, bind
// let user = {
//   name: "John",
// };

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// console.log(sayName.call(user, " Smith"));
// console.log(sayName.apply(user, [" Show"]));

// function count(number) {
//   return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this);
//   this.style.backgroundColor = "red";

//   function showThis() {
//     console.log(this);
//   }
//   showThis();
// });
