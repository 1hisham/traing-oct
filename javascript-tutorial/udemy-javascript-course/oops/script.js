'use strict';

// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991)
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack',1975);
// console.log(matilda,jack);

// console.log( jonas instanceof Person)

// //prototype
// Person.prototype.calcAge= function(){
//     console.log(2037- this.birthYear);
// }

// jonas.calcAge();
// matilda.calcAge();

// console.log(Person.prototype.isPrototypeOf(jonas));

// console.log(Person.prototype.isPrototypeOf(matilda));

// console.log(jonas.hasOwnProperty('calcAge'));

// console.log(jonas.__proto__.__proto__.__proto__);

// const arr = [3,2,1,6,5,8,9];
// console.log(arr.__proto__);
// console.log(arr.__proto__=== Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// const Car =function (make, speed ){
//     this.make = make ;
//     this.speed = speed;
    
// };

// Car.prototype.accelerate = function(){
//     this.speed+=10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//     console.log(this);
// };
// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercides',90);
// bmw.accelerate();
// //  console.log(this);

//  bmw.accelerate();
//  mercedes.accelerate();
//  mercedes.accelerate();


//class declearation 
// class PersonCl{
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     } 

//     calcAge(){
//         console.log(2037 - this.birthYear);

//     }
//     greet(){
//         console.log(`hey ${this.firstName}`);

//     } 
// }
// const jessica = new PersonCl('jessica',1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__===PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//     console.log(`hey ${this.firstName}`);
// };
// jessica.greet();

// const account ={
//     owner:'jonas',
//     movements: [200,513,656,455],
    
//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
    
//     set latest(mov){
//         this.movements.push(mov);
//     },
    
// };


// console.log(account.latest);

// account.latest = 55;
// console.log(account.movements);
// let arr = [];
// arr = account.movements; 
// console.log(arr);

/////

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();
