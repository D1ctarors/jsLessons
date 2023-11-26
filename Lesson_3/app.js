"use strict";

// 1) Оформить расчет дневного бюджета и вывод на экран этого значения как одну функцию (detectDayBudget)

// 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)

// 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):

// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

// Записать ответы в объект optionalExpenses в формате Номер - Ответ.

// optionalExpenses: {
// 1 : “ответ на вопрос”
// }

// Вызывать функции не обязательно.

// 4) Добавить папку с третьим уроком на GitHub

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

function chooseExpenses() {
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
      //   console.log("Успешно");
    } else {
      console.log("Данные заполнены не полностью");
      i--;
    }
  }
}
chooseExpenses();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optionalExpensesValue = prompt("Статья необязательных расходов?", "");
    appData.optionalExpenses[i + 1] = optionalExpensesValue;
  }
}
chooseOptExpenses();

function detectLevel(moneyPerDay) {
  alert(`Ваш бюджет на месяц =  ${moneyPerDay}`);

  if (moneyPerDay < 19000) {
    console.log("Минимальный уровень достатка");
  } else if (moneyPerDay > 19000 && moneyPerDay < 35000) {
    console.log("Средний уровень достатка");
  } else if (moneyPerDay > 35000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Ошибка определения уровня достатка");
  }
}

detectLevel(appData.budget / 30);

console.log(appData);
