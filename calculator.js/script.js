"use strict";

const clearBtn = document.querySelector('.clear')
const equal = document.querySelector('.equal')
const number = document.querySelectorAll(".number");
const oprator = document.querySelectorAll(".operator");
const displayEl = document.querySelector(".display");
let numText;
let storeDisplay = 0;  
let flagofcear = 0
let oprStore = "";
let accumulator = 0;
let stage = 0;
let prv;

// -------------------------
// =========================
//     INPUT BUTTON
//  ========================
//  ------------------------

number.forEach((num) => {
  num.addEventListener("click", () => {
    if(flagofcear === 0){   
      displayEl.innerHTML += num.innerHTML
      console.log("hellllloo");
    }else{
      
      displayEl.innerHTML = ''
      storeDisplay += num.innerHTML
      displayEl.innerHTML =  stringToInt(storeDisplay)
      console.log("helo");
      flagofcear = 1;

      }
    
    console.log(`the click number is ${num.innerHTML}`);
    // displayEl.innerHTML += num.innerHTML;


  });
});



// -------------------------
// =========================
//     OPERATOR BUTTON
//  ========================
//  ------------------------

oprator.forEach((opr) => {
  opr.addEventListener("click", () => {
    oprStore = opr.innerHTML;
    if (stage === 0) {
      accumulator += stringToInt(displayEl.innerHTML);
      console.log(accumulator);
      console.log('stageoooo');
      prv = opr.innerHTML;

      displayEl.innerHTML = "";
      console.log(accumulator);
      console.log(displayEl);
      stage = 1;
    } else {
      if(accumulator == displayEl.innerHTML){
      oprStore = opr.innerHTML;
  
      }else {
      switch (prv) {
        case "+":
          accumulator += stringToInt(displayEl.innerHTML);
          console.log(accumulator, "this is accumulatior");
          // displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;

          break;
        case "-":
          accumulator -= stringToInt(displayEl.innerHTML);
          // displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;
          break;
        case "*":
          accumulator *= stringToInt(displayEl.innerHTML);
          // displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;
          break;
        case "/":
          accumulator /= stringToInt(displayEl.innerHTML);
          // displayEl.innerHTML = "";
          displayEl.innerHTML = accumulator;
          break;
      }
    }
      prv = oprStore;
      flagofcear = 1
      storeDisplay = "";
    }
  });
});
displayEl.innerHTML += accumulator;
displayEl.innerHTML = "";


// -------------------------
// =========================
//     sting to interger
//  ========================
//  ------------------------

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

// -------------------------
// =========================
//     EQUAL BUTTON
//  ========================
//  ------------------------

equal.addEventListener('click', () =>{
  let numb;
  switch(prv){
    case "+":
     numb = stringToInt(displayEl.innerText)
    numb += accumulator
    displayEl.innerHTML = numb
    break;
    case "-":
     numb = stringToInt(displayEl.innerText)
    numb = accumulator - numb
    displayEl.innerHTML = numb
    break;
    case "*":
    numb = stringToInt(displayEl.innerText)
    numb = accumulator * numb
    displayEl.innerHTML = numb
    break;
    case "/":
     numb = stringToInt(displayEl.innerText)
    numb = accumulator / numb
    displayEl.innerHTML = numb
    break;
  }

  flagofcear = 1;
  oprStore = "";
  accumulator = 0;
  stage = 1;

})
// -------------------------
// =========================
//     CLEAR BUTTON
//  ========================
//  ------------------------

clearBtn.addEventListener('click', () => {
  displayEl.innerHTML = ''
   flagofcear = 0
   oprStore = "";
   accumulator = 0;
   stage = 0;
})