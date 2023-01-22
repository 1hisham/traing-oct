'use strict'


const number = document.querySelectorAll('.number')
const oprator = document.querySelectorAll('.operator')
const displayEl = document.querySelector('.display')



number.forEach((num) => {
  num.addEventListener('click',() =>{
    console.log(`the click number is ${num.innerHTML}`); 
    displayEl.innerHTML += num.innerHTML;
    console.log(displayEl);
    

    

  })

})

let oprStore = "";
let acc = 0;

oprator.forEach((opr) => {
  opr.addEventListener('click', () => {
    console.log("hello");
    oprStore = opr.innerHTML
    console.log(oprStore);
    if(acc===0){
      acc = num.innerHTML
    }

    acc += displayEl.innerHTML  

  })
})

















































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
  
  function stringToInt(x){
    let num = 0
    for(let i of  x){
    num = num * 10 + charToDigit(i)
  }
  return num;
  }

3 