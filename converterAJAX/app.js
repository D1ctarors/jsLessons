"use strict";

let wrapper = document.querySelector(".wrapper"),
  currency = wrapper.querySelectorAll(".currency"),
  rubInput = currency[0].querySelector("input"),
  usdInput = currency[1].querySelector("input");

rubInput.addEventListener("input", () => {
  let request = new XMLHttpRequest();

  //   request.open(method, url, assync, login, pass);
  request.open("GET", "/converterAJAX/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  //   status
  //   console.log(request.status());

  //   statusText

  //   responseText или response
  //   readyState

  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      usdInput.value = rubInput.value / data.usd;
    } else {
      usdInput.value = "Что-то пошло не тае!";
    }
  });
});
