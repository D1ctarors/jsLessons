// Задание: Используем промисы на реальных примерах

// 1) Переписать скрипт для отправки данных с формы, используя промисы. (Из проекта Yoga)

// Проверить, чтобы все работало и не было ошибок в консоли.

// Добавить папку с уроком на GitHub

// 2) Скачать архив, прикрепленный к уроку.

// У вас есть конвертер валют из предыдущего урока. Переписать его, используя промисы.

// Проверить, чтобы все работало и не было ошибок в консоли.

// Добавить папку с уроком на GitHub

let inputRub = document.getElementById("rub"),
  inputUsd = document.getElementById("usd");

const promise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
      resolve(data);
    } else {
      reject("Что-то пошло не так!");
    }
  });
});

inputRub.addEventListener("input", () => {
  promise
    .then((data) => {
      inputUsd.value = inputRub.value / data.usd;
    })
    .catch((error) => {
      inputUsd.value = error;
    });
});
