"use strict";

// Доработать код
// Добавить проверки

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

appData.moneyPerDay = appData.budget / 30;

alert(`Ваш бюджет на месяц =  ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 19000) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 19000 && appData.moneyPerDay < 35000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 35000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Ошибка определения уровня достатка");
}

console.log(appData);
