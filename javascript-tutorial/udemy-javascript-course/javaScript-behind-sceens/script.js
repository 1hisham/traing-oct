'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const firstName = `  stive  `;

//     const output = ` ${firstName}you are ${age}, born in ${birthYear}`;

//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {

//       var str = ` Oh, and you're a kid${firstName} `;
//       function add(a, b) {
//         return a + b;

//       }

//     }

//     console.log(str);
//     console.log(add(2, 3));
//   }

//   printAge();
//   console.log(firstName);
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Functions
// console.log(addDecl(2,3));
// console.log(addArrow(2,3));
// console.log(addExprt(2,3));
// console.log(addArrow)

// function addDecl(a,b){
//     return a + b;

// }

// let addExprt = function(a, b){
//     return a + b;

// };
// let addArrow = ( a , b )=> a + b

//examplas 
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10 ;

// function deleteShoppingCart(){
//     console.log('All produts deleted!');
// }


// const a = 1;
// let b = 2;

// var c = 3;

// This keyword  uses

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear =>{
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// const Jonas ={
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);

//     },
// };
// Jonas.calcAge();

// const rooney ={
//     year:2017,

// };

// rooney.calcAge = Jonas.calcAge;
// rooney.calcAge();

// const f = rooney.calcAge;
// f()


let age =30 ;
let oldAge = age;
age =31;
console.log(age);
console.log(oldAge);

const me = {
    name:'jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:',friend);
console.log('me', me)