const btnNumber = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const btnClear = document.querySelector(".clear");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");

let storteValueOne;

///// TO GET A VALIED INPUT SWITCH

btnNumber.forEach((num) => {
  num.addEventListener("click", () => {
    console.log(`It's a Number and Number is ${num.innerHTML}`);
    display.innerHTML += num.innerHTML;
  });
});

let firstNumber;
let secondNumber;

btnOperator.forEach((opr) => {
  opr.addEventListener("click", () => {
    storteValue = display.innerHTML;
    display.innerHTML = "";
    if (firstNumber === undefined) {
      firstNumber = +storteValue;
    } else {
      secondNumber = +storteValue;
    }
    console.log(` first ${firstNumber},second ${secondNumber}`);

    if (firstNumber && secondNumber) {
      if (opr.innerHTML === "+") {
        add(firstNumber, secondNumber);
      } else if (opr.innerHTML === "-") {
        sub(firstNumber, secondNumber);
      }
    }
  });
});

let result;

function add(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  console.log(result);
  // display.innerHTML = result
}
function sub(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
  console.log(result);
  // display.innerHTML = result
}

equal.addEventListener("click", () => {
  display.innerHTML = result;
  console.log(result);
});

// function topassing(){
//         console.log(`dfasd${display.innerHTML}`);

//         topassing(display.innerHTML);

//     }

//     storteValue = display.innerHTML
//     btnOperator.forEach((opr) =>{
//     opr.addEventListener("click", () =>{
//         storteValueOne = display.innerHTML
//         storeOperator = opr.innerHTML
//         display.innerHTML = ""
//         console.log("hl");

//         storgeOne(storteValueOne,storeOperator)

//        })
//    })

// let storageNumber = []
// let storageOperator= []

// btnOperator.forEach((opr) => {
//    opr.addEventListener("click", () => {
//       if (display.innerHTML != ""){
//          storageNumber.push(display.innerText)
//         }
//         display.innerText = "";
//         console.log(`s1=${storageNumber}`);
//         console.log(`It's a operator and operator is "${opr.innerHTML}"`);
//         storageOperator.push(opr.innerText)
//         console.log([storageOperator]);
//       if(opr.innerHTML === "+"){
//         console.log("hello");
//       }
//       if(opr.innerHTML === "-"){
//         console.log("min");
//       }
//       if(opr.innerHTML === "*"){
//         console.log("div");
//       }
//       if(opr.innerHTML === "/"){
//         console.log("mult");
//       }

//    });
// });
// console.log([storageNumber]);

// toInputNumberOne()
