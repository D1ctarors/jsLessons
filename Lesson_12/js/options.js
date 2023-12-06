// 1) Привести свой проект в соответствие с ES6 (в проекте Yoga, то, что можно преобразовать)

// 2) Используя синтаксис ES6 в отдельном документе:

// · Создать класс options

// · Он должен содержать свойства: height, width, bg, fontSize, textAlign

// · Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров

// · Создать новый объект через класс

// · Вызвать его метод и получить элемент на странице

// 3) Проверить, чтобы все работало и не было ошибок в консоли

// 4) Добавить папку с уроком на GitHub

"use strict";

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createElement() {
    let wrapper = document.querySelector(".test");
    wrapper.style.display = "flex";
    wrapper.style.gap = 10 + "px";

    let item = document.createElement("div");
    item.classList.add("item");

    // item.style.height = this.height + "px";
    // item.style.width = this.width + "px";
    // item.style.background = this.bg;
    // item.style.fontSize = this.fontSize;
    // item.style.textAlign = this.textAlign;
    // item.textContent = prompt("Текст внутри блока");

    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    item.style.cssText = param;
    item.textContent = prompt("Текст внутри блока");

    wrapper.appendChild(item);
  }
}

const square = new Options(100, 100, "white", 18, "center");
const square2 = new Options(200, 326, "red", 120, "start");

square.createElement();
square2.createElement();
