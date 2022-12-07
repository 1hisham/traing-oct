 let firstCard = 9
 let secondCard = 4
 let sum = firstCard + secondCard 
 let hasBlackJack = false
 let isAlive = true

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
console.log(messageEl)

 let message = ""

 function startGame(){
sumEl.textContent = ""
   if (sum <= 20){

      message = " Do you want to draw a new card? "

   } else if (sum === 21 ) {

      //  console.log("you won")
      message = "you won"
      hasBlackJack = true

   }else  {

      //  console.log("you lost")
      message = "you lost "
      isAlive =false 

   } 
   messageEl.textContent = message

// console.log(message)

 //cash out
//  console.log(hasBlackJack)
//  console.log(isAlive)

//Log it Out
  
}