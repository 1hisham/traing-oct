//  let firstCard = 9
//  let secondCard = 4
//  let sum = firstCard + secondCard 
//  let hasBlackJack = false
//  let isAlive = true

// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// console.log(messageEl)

//  let message = ""

//  function startGame(){
// sumEl.textContent = "Sum:" + sum 
//    if (sum <= 20){

//       message = " Do you want to draw a new card? "

//    } else if (sum === 21 ) {

//       //  console.log("you won")
//       message = "you won"
//       hasBlackJack = true

//    }else  {

//       //  console.log("you lost")
//       message = "you lost "
//       isAlive =false 

//    } 
//    messageEl.textContent = message

// // console.log(message)

//  //cash out
// //  console.log(hasBlackJack)
// //  console.log(isAlive)

// //Log it Out
  
// }

let player = {
   name:"per",
   chips:200
}

let cards = []
let sum = 0
let hasBlackJack =false
let isAlive =false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $ " + player.chips
function getRandomCard(){
   let randomNumber = Math.floor( Math.random()*13) + 1
   if (randomNumber > 10){
      return 10
   } else if (randomNumber === 1){
      return 11
   }else {
      return randomNumber
   }
}
function startGame(){
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard,secondCard]
sum = firstCard + secondCard
renderGame()

}

function renderGame (){
   cardsEl.textContent = "Card:"
   for (let i = 0; i < cards.length; i++){
      cardsEl.textContent += cards[i] + " "

   } 

   sumEl.textContent ="Sum:" + sum
     if (sum <= 20){
      message = "you've got Blackjack!"
      hasBlackJack = true
     }else if(sum ===21 ){
      message ="do you want to draw a new card?"
     }else{
      message ="you are out of game"
      isAlive = false
     }
     messageEl.textContent = message
   }


   function newCard(){
      if (isAlive === true && hasBlackJack === false){
         let cards = getRandomCard()
         sum += cards
         cards.push(cards)
         renderGame()
      }
   }