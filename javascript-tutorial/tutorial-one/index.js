// document.getElementById("count-el").innerText = 6

// let myAge= 23

// console.log (myAge)

// human age to dog age calculator //

// let humanAge = 23

// let = dogAge=humanAge * 7

// console . log (humanAge)

// console .log(dogAge)

// let myAge =23

// let DogAge=7

// console.log (myAge*DogAge)

// bonus point calculation//

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console .log(bonusPoint)


//          CLICK BUTTON          //


// let count=0

// function increment() {
//     count=count+1
//     console.log(count)
    
// }



// race              /  //  /

// function countdown(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log(4)
//     console.log(5)
// }
// countdown()
 

// function myLogger() {
//     console.log(42)
// }

// myLogger() 
 

// lap time on race  //

// let lap1 = 33
// let lap2 = 34
// let lap3 = 36

// function lapTime() {
//     let totalTime = lap1 +lap2 + lap3
//     console.log(totalTime)

// }
// lapTime()


// let lapCompleted =0

// function incrementLap(){
//      lapCompleted = lapCompleted + 1
 
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapCompleted)



// -------------------
// people Counter 
// ------------------
let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById("count-el")
 
let count = 0
// console.log(countEl)

//  console.log(saveEl)
function increment() {

 
    count += 1
    countEl.innerText = count
    // console.log(count)
  
}

function save() {
    let countStr = count + " -"
    saveEl.innerText += countStr
    // countEl.textContent = 0
    // count = 0
    console.log(countStr)
  }



// let userName= "donbosco                "
// let notification = "you have a  notificartion"

// console.log(userName+", " + notification+" !") 

//  let name= "hisham"
//  let greeting= "hii"
 
//  let greetingName= greeting +" '"   +name

//  console.log(greetingName)