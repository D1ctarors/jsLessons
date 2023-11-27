"use strict";

// Используя только файл скрипта (html руками не трогать) выполнить такие действия:

// · Восстановить порядок в меню, добавить пятый пункт

// · Заменить картинку заднего фона на другую из папки img

// · Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

// · Удалить рекламу со страницы

// · Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

// 3) Проверить, чтобы все работало и не было ошибок в консоли

let navList = document.querySelector(".menu"),
  navItems = document.querySelectorAll(".menu-item"),
  navItem = document.createElement("li"),
  title = document.querySelector("#title"),
  advs = document.querySelectorAll(".adv"),
  promptBlock = document.querySelector("#prompt"),
  que = prompt("Как вы относитесь к технике Apple?", "");

//   Добавить пятый пункт
navList.appendChild(navItem);
navItem.classList.add("menu-item");
navItem.textContent = "Пятый пункт";

//   Сортировка пунктов
navList.insertBefore(navItems[1], navItems[3]);

//   Заменить картинку заднего фона
document.body.style.backgroundImage = "url(/Lesson_5/img/apple_true.jpg)";

//   Заменить заголовок
title.textContent = "Мы продаем только подлинную технику Apple";

//   Удалить рекламу
advs.forEach(function (item) {
  item.remove();
});

//	Отношение к технике apple
promptBlock.textContent = `${que}`;
