// "use strict";
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

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());

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

//! Переменные
// function makeArr() {
//   var items = [];
//   for (var i = 0; i < 10; i++) {
//     var item = function () {
//       console.log(i);
//     };
//     items.push(item);
//   }
//   return items;
// }

// var arr = makeArr();
// arr[1]();
// arr[3]();
// arr[7]();

//! Стрелочные функции

// let fun = () => {
//   console.log(this);
// };

// fun();

// let obj = {
//   num: 4,
//   sayNum: function () {
//     let say = () => {
//       console.log(this);
//     };
//     say();
//   },
// };
// obj.sayNum();

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   let show = () => {
//     console.log(this);
//   };
//   show();
// });

// function calcOrDouble(number, basis = 2) {
//   //   basis = basis || 2; ES5
//   console.log(number * basis);
// }
// calcOrDouble(3, 5);
// calcOrDouble(6);

//! Spread оператор
// let video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "bloger"],
//   internet = [...video, ...blogs, "vk", "facebook"];

// // console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// let num = [2, 5, 7];
// log(...num);

//! JSON
// let options = {
//   with: 1280,
//   hight: 798,
//   background: "red",
//   font: {
//     size: "16px",
//     color: "#fff",
//   },
// };
// console.log(JSON.parse(JSON.stringify(options)));

//! Promise

//? Пример через callback
let btn = document.querySelector("button"),
  drink = 1;
// // btn.addEventListener("click", function () {
// //   alert("Что-то произошло!");
// // });

// function shoot(arrow, headshot, fail) {
//   console.log("Вы сделали выстрел...");

//   setTimeout(function () {
//     Math.random() > 0.5 ? headshot({}) : fail("Промах :(");
//   }, 3000);
// }

// function win() {
//   console.log("Победа!!!");
//   drink == 1 ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//   console.log("Вам купили пиво");
// }

// function giveMoney() {
//   console.log("Вам заплатили");
// }

// function loose() {
//   console.log("Вы проиграли");
// }

// shoot(
//   {},
//   function (mark) {
//     console.log("Вы попали в цель!");
//     win(mark, buyBeer, giveMoney);
//   },
//   function (miss) {
//     console.log("Промах :(");
//     loose();
//   }
// );

//? Пример через Промисы
// function shoot(arrow) {
//   console.log("Вы сделали выстрел...");
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       Math.random() > 0.5 ? resolve({}) : reject("Промах :(");
//     }, 1000);
//   });
//   return promise;
// }

// function win() {
//   console.log("Победа!!!");
//   drink == 1 ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//   console.log("Вам купили пиво");
// }

// function giveMoney() {
//   console.log("Вам заплатили");
// }

// function loose() {
//   console.log("Вы проиграли");
// }

// shoot({})
//   .then((mark) => console.log("Вы попали в цель!"))
//   .then(win)
//   .catch(loose);

//? localstorage
// localStorage.setItem("number", 1);
// localStorage.setItem("cool", "yep");

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("cool");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function () {
  let checkbox = this.document.querySelector("#rememberMe");
  if (this.localStorage.getItem("isChecked") === "true") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("click", function () {
    localStorage.setItem("isChecked", true);
  });

  let person = {
    name: "Alex",
    age: 23,
    tech: ["mobile", "pc"],
  };

  let serializedPerson = JSON.stringify(person);

  this.localStorage.setItem("Alex", serializedPerson);
});
