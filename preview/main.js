// function func() {
//   console.log("Hello");
// }

// delay = 2000;

// setInterval(func, delay);

// let timerId = setTimeout(function log() {
//   console.log("Hello");
//   setTimeout(log, 2000);
// });

// let btn = document.querySelector(".btn"),
//   elem = document.querySelector(".wrapper .box");

// function animation() {
//   let position = 0,
//     id = setInterval(frame, 10);

//   function frame() {
//     if (position == 300) {
//       clearInterval(id);
//     } else {
//       position++;
//       elem.style.top = position + "px";
//       elem.style.left = position + "px";
//     }
//   }
// }

// btn.addEventListener("click", animation);

let btnBlock = document.querySelector(".btn-block"),
  btns = document.getElementsByTagName("button");

btnBlock.addEventListener("click", function (e) {
  if (e.target && e.target.tagName == "BUTTON") {
    console.log("hello");
  }
});

// btnBlock.addEventListener("click", function (e) {
//   if (e.target && e.target.matches("button.first")) {
//     console.log("hello");
//   }
// });
