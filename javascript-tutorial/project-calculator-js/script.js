// const btnOne = document.querySelector('.one')
// const btnTwo = document.querySelector('.two')
// const btnThree = document.querySelector('.three')
// const btnFour = document.querySelector('.four')
// const btnFive = document.querySelector('.five')
// const btnSix = document.querySelector('.six')
// const btnSeven = document.querySelector('.seven')
// const btnEight = document.querySelector('.eight')
// const btnNine = document.querySelector('.nine')
// const btnZero = document.querySelector('.zero')
// const btnAdd = document.querySelector('.add')
// const btnSub = document.querySelector('.substaration')
// const btnMulti = document.querySelector('.mulitiplication')
// const btnDiv = document.querySelector('.division')
// const  btnClear = document.querySelector('.clear')
// const btnEqual = document.querySelector('.equal')
// const display = document.querySelector('.display')

const btnNumber = document.querySelectorAll(".number");
// console.log(btnNumber);

const btnOperator = document.querySelectorAll(".operator");
// console.log(btnOperator);

const btnClear = document.querySelector(".clear");
// console.log(btnClear);

const display = document.querySelector(".display");

//   TO INPUT NUMBER Function

function toInputNumber() {
  btnNumber.forEach((num) => {
    num.addEventListener("click", () => {
      // display.innerText = num.innerHTML
      console.log(` It's a Number and Number is ${num.innerHTML}`);

      //ADDING ELEMENT TO THE END
    //   function forstoreNumber() {
        let storage = document.createTextNode(num.innerHTML);
        display.appendChild(storage);
    //   }
    //   forstoreNumber();
    
    });
  });
}
toInputNumber();

btnOperator.forEach((opr) => {
  opr.addEventListener("click", () => {
    if (display.innerText !== 0) storageNumber1 = display.innerText;
    console.log(storageNumber1);
    display.innerText = "";

    toInputNumber();
    storageNumber2 = display.innerText;

    console.log(`It's a operator and operator is "${opr.innerHTML}"`);
  });
});

btnClear.addEventListener("click", () => {
  display.innerText = "";
});
