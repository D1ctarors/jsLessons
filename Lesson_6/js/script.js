let money,
  time,
  startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector("#income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector("#sum"),
  percentValue = document.querySelector("#percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

// Задаём первые два вопроса
startBtn.addEventListener("click", function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDay();
});

// Добавление обязательных расходов
expensesBtn.addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != ""
    ) {
      appData.expenses[a] = b;
      sum += +b;
      console.log("Успешно");
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

// Добавление необязательных расходов
optionalExpensesBtn.addEventListener("click", function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

// Расчета бюджета на месяц
countBtn.addEventListener("click", function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    // Определение уровня достатка

    if (appData.moneyPerDay < 19000) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 19000 && appData.moneyPerDay < 35000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 35000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Ошибка определения уровня достатка";
    }
  } else {
    dayBudgetValue.textContent = "Сначала введите доход!";
  }
});

// Доп. доход
incomeItem.addEventListener("input", function () {
  let items = incomeItem.value;
  appData.income = items.split(", ");

  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
  if (appData.savings) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function () {
  if (appData.savings) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthInCome = (sum / 100 / 12) * percent;
    appData.yearInCome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
    yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
  }
});

// Проверка накоплений
percentValue.addEventListener("input", function () {
  if (appData.savings) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthInCome = (sum / 100 / 12) * percent;
    appData.yearInCome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
    yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
  }
});

// Создание объекта
const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

console.log(appData);
