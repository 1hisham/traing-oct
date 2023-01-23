"use strict";

const number = document.querySelectorAll(".number");
const oprator = document.querySelectorAll(".operator");
const displayEl = document.querySelector(".display");
let numText;

number.forEach((num) => {
  num.addEventListener("click", () => {
    // forClear();
    console.log(`the click number is ${num.innerHTML}`);
    displayEl.innerHTML += num.innerHTML;
    // console.log(displayEl);
    function forNum() {
      return num.innerHTML;
    }

    numText = forNum();
  });
});

let oprStore = "";
let accumulator = 0;
let stage = 0;
let prv;

oprator.forEach((opr) => {
  opr.addEventListener("click", () => {
    oprStore = opr.innerHTML;
    if (stage === 0) {
      accumulator += stringToInt(displayEl.innerHTML);
      console.log(accumulator);
      // console.log(numText,"this is num.innerText");
      prv = opr.innerHTML;

      displayEl.innerHTML = "";
      stage = 1;
    } else {
      switch (prv) {
        case "+":
          accumulator += stringToInt(displayEl.innerHTML);
          console.log(accumulator, "this is accumulatior");
          displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;

          break;
        case "-":
          accumulator -= stringToInt(displayEl.innerHTML);
          displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;
          break;
        case "*":
          accumulator *= stringToInt(displayEl.innerHTML);
          displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;
          break;
        case "/":
          accumulator /= stringToInt(displayEl.innerHTML);
          displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;
          break;
      }
      prv = oprStore;
      
    }
  });
});
displayEl.innerHTML = accumulator;
displayEl.innerHTML = "";
// function forClear(){
//   displayEl.innerHTML = ""
// }

function charToDigit(x) {
  switch (x) {
    case "0":
      return 0;

    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
  }
}

function stringToInt(x) {
  let num = 0;
  for (let i of x) {
    num = num * 10 + charToDigit(i);
  }
  return num;
}

