// 1) Привести свой проект в соответствие с ES6 (в проекте Yoga, то, что можно преобразовать)

// 2) Используя синтаксис ES6 в отдельном документе:

// · Создать класс options

// · Он должен содержать свойства: height, width, bg, fontSize, textAlign

// · Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров

// · Создать новый объект через класс

// · Вызвать его метод и получить элемент на странице

// 3) Проверить, чтобы все работало и не было ошибок в консоли

// 4) Добавить папку с уроком на GitHub

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  //Работа табов
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.add("show");
      tabContent[b].classList.remove("hide");
    }
  }

  info.addEventListener("click", function (e) {
    let target = e.target;

    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Обратный отчёт
  let deadLine = "2023-12-09";

  function getTimeRemaining(deadLine) {
    let t = Date.parse(deadLine) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    };
  }

  function setTimer(id, deadLine) {
    let timer = document.getElementById(id),
      hoursElement = timer.querySelector(".hours"),
      minutesElement = timer.querySelector(".minutes"),
      secondsElement = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(deadLine);
      hoursElement.textContent = t.hours;
      minutesElement.textContent = t.minutes;
      secondsElement.textContent = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setTimer("timer", deadLine);

  //   Модальное окно
  let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  more.addEventListener("click", () => {
    overlay.style.display = "block";
    overlay.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });

  close.addEventListener("click", () => {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
});
