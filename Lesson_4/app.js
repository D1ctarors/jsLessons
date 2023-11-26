"use strict";

// 1) Написать проверку, что пользователь может:

// · Ввести в дополнительных доходах (chooseIncome) только строку

// · Не может оставить строку пустой

// · Не может отменить вопрос

// 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

// · Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

// 4) Проверить, чтобы все работало и не было ошибок в консоли

// 5) Добавить папку с уроком на свой GitHub

let money, time;

// Задаём первые два вопроса
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

// Создание объекта
const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  // Добавление обязательных расходов
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let expensesKey = prompt(
        "Введите обязательную статью расходов в этом месяце",
        ""
      );
      let expensesValue = +prompt("Во сколько обойдется?", "");

      if (
        typeof expensesKey === "string" &&
        typeof expensesKey != null &&
        typeof expensesValue != null &&
        expensesKey != "" &&
        expensesValue != ""
      ) {
        appData.expenses[expensesKey] = expensesValue;
        console.log("Успешно");
      } else {
        console.log("Данные заполнены не полностью");
        i--;
      }
    }
  },
  // Расчета бюджета на месяц
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ваш бюджет на месяц =  ${appData.moneyPerDay}`);
  },
  // Определение уровня достатка
  detectLevel: function () {
    if (appData.moneyPerDay < 19000) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 19000 && appData.moneyPerDay < 35000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 35000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Ошибка определения уровня достатка");
    }
  },
  // Проверка накоплений
  checkSaving: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", "");
      let percent = +prompt("Под какой процент??", "");

      appData.monthInCome = (save / 100 / 12) * percent;
      alert(`Доход в месяц с депозита: ${appData.monthInCome}`);
    }
  },
  // Определение необязательных расходов
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let optionalExpensesValue = prompt("Статья необязательных расходов?", "");
      appData.optionalExpenses[i + 1] = optionalExpensesValue;
    }
  },
  chooseInCome: function () {
    let items = prompt("Что принесёт доп. доход? (Ввод через запятую)", "");
    appData.income = items.split(", ");
  },
};

console.log(appData);
