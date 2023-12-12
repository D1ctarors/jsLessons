// Задание: Используем промисы на реальных примерах

// 1) Переписать скрипт для отправки данных с формы, используя промисы. (Из проекта Yoga)

// Проверить, чтобы все работало и не было ошибок в консоли.

// Добавить папку с уроком на GitHub

// 2) Скачать архив, прикрепленный к уроку.

// У вас есть конвертер валют из предыдущего урока. Переписать его, используя промисы.

// Проверить, чтобы все работало и не было ошибок в консоли.

// Добавить папку с уроком на GitHub

window.addEventListener("DOMContentLoaded", () => {
  ("use strict");
  //! Работа табов
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

  //! Обратный отчёт
  let deadLine = "2023-12-31";

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

  //!   Модальное окно
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

  //! Форма
  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так...",
  };

  let form = document.querySelector(".main-form"),
    input = form.querySelectorAll("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  // Структура отправки данных для PHP
  //   form.addEventListener("submit", function (event) {
  //     event.preventDefault();
  //     form.appendChild(statusMessage);

  //     let request = new XMLHttpRequest();
  //     request.open("POST", "server.php");
  //     request.setRequestHeader(
  //       "Content-type",
  //       "application/x-www-form-urlencoded"
  //     );

  //     let formData = new FormData(form);
  //     request.send(formData);

  //     // Проверка
  //     request.addEventListener("readystatechange", function () {
  //       if (request.readyState < 4) {
  //         statusMessage.innerHTML = message.loading;
  //       } else if (request.readyState === 4 && request.status == 200) {
  //         statusMessage.innerHTML = message.success;
  //       } else {
  //         statusMessage.innerHTML = message.failure;
  //       }
  //     });

  //     for (let i = 0; i < input.length; i++) {
  //       input[i].value = "";
  //     }
  //   });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);
    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });

    let dataJSON = JSON.stringify(obj);

    const promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader(
        "Content-type",
        "application/json; charset=utf-8"
      );
      // Проверка
      request.addEventListener("readystatechange", function () {
        if (request.readyState < 4) {
          resolve();
        } else if (request.readyState === 4 && request.status == 200) {
          resolve();
        } else {
          reject();
        }
      });
      request.send(dataJSON);
    });

    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    }

    promise
      .then(() => {
        statusMessage.innerHTML = message.loading;
      })
      .then(() => {
        statusMessage.innerHTML = message.success;
      })
      .catch(() => {
        statusMessage.innerHTML = message.failure;
      })
      .then(() => {
        clearInput();
      });
  });
});
