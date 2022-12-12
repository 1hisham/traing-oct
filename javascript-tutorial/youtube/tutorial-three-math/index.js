let num1 = 7
let num2 = 2


document.getElementById("sum1-el").textContent = num1
document.getElementById("sum2-el").textContent = num2


let sumEl = document.getElementById("sum-el")


function add(){
   let result = num1 + num2
   sumEl.textContent = "sum:" + result
}

function subsract(){
    let result = num1 - num2
    sumEl.textContent = "difference:" + result
 }
 
 function multiplaly(){
    let result = num1 * num2
    sumEl.textContent = "product:" + result
 }

 function divide(){
    let result = num1 / num2
    sumEl.textContent = "divide:" + result
 }