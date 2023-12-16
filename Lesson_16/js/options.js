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
