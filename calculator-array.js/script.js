"use strict";

const clearBtn = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const number = document.querySelectorAll(".number");
const oprator = document.querySelectorAll(".operator");
const displayEl = document.querySelector(".display");
let numText;
let storeDisplay = 0;
let flagofcear = 0;
let oprStore = "";
let accumulator = 0;
let stage = 0;
let prv;
let numbersArrays = [];
let operatorArray = [];
let leatestNumber = 0;


number.forEach((num) => {
  num.addEventListener("click", () => {
    leatestNumber += num.innerHTML;
    displayEl.innerHTML += num.innerHTML;
  });
});

oprator.forEach((opr) => {
  opr.addEventListener("click", () => {
    if(stage === 0){
    numbersArrays.push(stringToInt(leatestNumber));
    console.log(numbersArrays);
    operatorArray.push(opr.innerHTML);
    console.log(operatorArray);
    displayEl.innerHTML += opr.innerHTML;
    leatestNumber = 0;
    }else{
      numbersArrays.push(stringToInt(leatestNumber));
    operatorArray = []
    numbersArrays = [totalValue]
    console.log(numbersArrays);
    operatorArray.push(opr.innerHTML);
    console.log(operatorArray);
    displayEl.innerHTML += opr.innerHTML;
    leatestNumber = 0;
      

    }
  });
});
let firstValue;
let secondValue;
let operatorItem;
let totalValue;
let iteration = 0;

equal.addEventListener("click", () => {
  numbersArrays.push(stringToInt(leatestNumber));
  console.log(numbersArrays);

  iteration = numbersArrays.length;
  for (let i = 0; i < iteration; i++) {
    firstValue = numbersArrays[0];
    secondValue = numbersArrays[1];
    operatorItem = operatorArray[i];
    // if (i == 0) {
    switch (operatorItem) {
      case "+":
        totalValue = firstValue + secondValue;
        displayEl.innerHTML = totalValue;
        console.log(totalValue, "on working condition");
        numbersArrays.splice(0, 2);
        numbersArrays.unshift(totalValue);
        console.log(numbersArrays);
        // operatorArray.splice(0, 1);
        iteration++;
        console.log(operatorArray);

        break;
      case "-":
        totalValue = firstValue - secondValue;
        displayEl.innerHTML = totalValue;
        console.log(totalValue, "on working condition");
        numbersArrays.splice(0, 2);
        numbersArrays.unshift(totalValue);
        console.log(numbersArrays);
        iteration++;
        // operatorArray.splice(0, 1);
        console.log(operatorArray);

        break;
      case "*":
        totalValue = firstValue * secondValue;
        displayEl.innerHTML = totalValue;

        break;
      case "/":
        totalValue = firstValue / secondValue;
        displayEl.innerHTML = totalValue;

        break;
      // }
    }
    //  else {
    //   switch (operatorItem) {
    //     case "+":
    //       totalValue = firstValue + secondValue;
    //       displayEl.innerHTML = totalValue;
    //       console.log(totalValue, "on working condition");
    //       numbersArrays.splice(0, 2);
    //       numbersArrays.unshift(totalValue);
    //       console.log(numbersArrays);
    //       iteration++

    //       break;
    //     case "-":
    //       totalValue = firstValue - secondValue;
    //       displayEl.innerHTML = totalValue;

    //       break;
    //     case "*":
    //       totalValue = firstValue * secondValue;
    //       displayEl.innerHTML = totalValue;

    //       break;
    //     case "/":
    //       totalValue = firstValue / secondValue;
    //       displayEl.innerHTML = totalValue;

    //       break;
    //   }
    // }
  }
  console.log(totalValue, "totalValue");
  stage = 1  
  console.log(operatorArray,"operatorarray");
  console.log(numbersArrays,"number");
  
});

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
//     INPUT BUTTON
//  ========================
//  ------------------------

// number.forEach((num) => {
//   num.addEventListener("click", () => {
//     if(flagofcear === 0){
//       displayEl.innerHTML += num.innerHTML

//     }else{

//       displayEl.innerHTML = ''
//       storeDisplay += num.innerHTML
//       displayEl.innerHTML =  stringToInt(storeDisplay)
//       console.log("helo");
//       flagofcear = 1;

//       }

//     console.log(`the click number is ${num.innerHTML}`);
//     // displayEl.innerHTML += num.innerHTML;

//   });
// });

// // -------------------------
// // =========================
// //     OPERATOR BUTTON
// //  ========================
// //  ------------------------

// oprator.forEach((opr) => {
//   opr.addEventListener("click", () => {
//     oprStore = opr.innerHTML;
//     if (stage === 0) {
//       accumulator += stringToInt(displayEl.innerHTML);
//       console.log(accumulator);
//       console.log('stageoooo');
//       prv = opr.innerHTML;

//       displayEl.innerHTML = "";
//       console.log(accumulator);
//       console.log(displayEl);
//       stage = 1;
//     } else {
//       if(accumulator == displayEl.innerHTML){
//       oprStore = opr.innerHTML;

//       }else {
//       switch (prv) {
//         case "+":
//           accumulator += stringToInt(displayEl.innerHTML);
//           console.log(accumulator, "this is accumulatior");
//           // displayEl.innerHTML = "";
//           displayEl.innerHTML = accumulator;

//           break;
//         case "-":
//           accumulator -= stringToInt(displayEl.innerHTML);
//           // displayEl.innerHTML = "";
//           displayEl.innerHTML = accumulator;
//           break;
//         case "*":
//           accumulator *= stringToInt(displayEl.innerHTML);
//           // displayEl.innerHTML = "";
//           displayEl.innerHTML = accumulator;
//           break;
//         case "/":
//           accumulator /= stringToInt(displayEl.innerHTML);
//           // displayEl.innerHTML = "";
//           displayEl.innerHTML = accumulator;
//           break;
//       }
//     }
//       prv = oprStore;
//       flagofcear = 1
//       storeDisplay = "";
//     }
//   });
// });
// displayEl.innerHTML += accumulator;
// displayEl.innerHTML = "";

// -------------------------
// =========================
//     sting to interger
//  ========================
//  ------------------------

// -------------------------
// =========================
//     EQUAL BUTTON
//  ========================
//  ------------------------

// equal.addEventListener('click', () =>{
//   let numb;
//   switch(prv){
//     case "+":
//      numb = stringToInt(displayEl.innerText)
//     numb += accumulator
//     displayEl.innerHTML = numb
//     break;
//     case "-":
//      numb = stringToInt(displayEl.innerText)
//     numb = accumulator - numb
//     displayEl.innerHTML = numb
//     break;
//     case "*":
//     numb = stringToInt(displayEl.innerText)
//     numb = accumulator * numb
//     displayEl.innerHTML = numb
//     break;
//     case "/":
//      numb = stringToInt(displayEl.innerText)
//     numb = accumulator / numb
//     displayEl.innerHTML = numb
//     break;
//   }

//   flagofcear = 1;
//   oprStore = "";
//   accumulator = 0;
//   stage = 1;

// })
// // -------------------------
// // =========================
// //     CLEAR BUTTON
// //  ========================
// //  ------------------------

// clearBtn.addEventListener('click', () => {
//   displayEl.innerHTML = ''
//    flagofcear = 0
//    oprStore = "";
//    accumulator = 0;
//    stage = 0;
// })
