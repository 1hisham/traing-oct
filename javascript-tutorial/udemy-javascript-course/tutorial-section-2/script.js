'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :');

//\\ function


// function logger(heeloo) {
//    const heelo = `hello world`;
//    console.log(heelo)
//    return heelo
// }
// logger();
// const runnig = logger*(logger() * );
// console.log(runnig)

// function friuitProccer(apples,oranges){
//    // console.log(apples,oranges);
//    const juice =`juice with ${apples}apples and ${oranges} oranges`;

//    // console.log(juice)
//    return juice 
// }

// friuitProccer(5, 0);

// const applejuse = friuitProccer (5,0);
// console.log(applejuse);


// const appleorangejuse = friuitProccer (2,5);
// console.log(appleorangejuse);


// function calcAge1(birthYear){
//    return 2037 - birthYear ;
// }
// const age1 = calcAge1(1991);


// const calcAge2 = function (birthYear){
//    return 2035 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1 , age2);

// const calcAge3 =birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// const yearUntilReiterment = birthYear => {
//    const age = 2037 - birthYear;
//    const retirement = 65 - age;
//    return retirement;
// }

// console.log(yearUntilReiterment(1999), 'john');
// console.log(yearUntilReiterment(1980) , 'bob');


// const  cutPieces = function(fruit){
//    return fruit *4 ;
// };
// const fruitprocessor = function(apples , oranges){
//    const applePieces = cutPieces(apples);
//    const orangePieces = cutPieces(oranges);

//    const juice =`juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//    return juice
// }

// console.log(fruitprocessor(2,3));


// const calcAge = function (birthYear) {
//    return 2037 - birthYear;
// }

// const yearUntilReiterment = function (birthYear,firstName) {
//    const age = calcAge(birthYear);
//    const retirement = 65 - age;

//    if (retirement > 0) {

//       console.log(` ${firstName} reties in ${retirement} years`);
//       return retirement;
//    } else {
//       console.log(` ${firstName} is alrady retaired`)
//       return -1;

//    }
// }

// console.log(yearUntilReiterment(1991, 'john'));
// console.log(yearUntilReiterment(1950, 'mike'));

// const calcAverage = (a ,b ,c) => (a+b+c)/3;
// console.log(calcAverage(44,23,71));

// ////
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);

// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas){
//    if (avgDolphins >= 2 * avgKoalas
//       ){
//       console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);

//    }else if (avgKoalas >= 2*avgDolphins) { 
//       console.log(`kovals win (${avgKoalas} vs ${avgDolphins})`)
//    }else{
//    console.log('no team wins..');
// }
// }
// checkWinner (scoreDolphins, scoreKoalas);
// checkWinner(576,111);


// //test
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23 , 14 ,9);

// console.log(scoreDolphins,scoreKoalas);
// checkWinner(scoreDolphins,scoreKoalas);



// 
//Arreys //


// const frinds = ['sonu','monu ' , 'sinu' ];
// console.log(frinds.length)

// const year = new Array(15,54,45,898,13);
// console.log(year);

// console.log(frinds[frinds.length -1]);

// const calcAge = function (birthYear){
//    return 2037-birthYear;

// }
// const year = [1990 , 1967, 2002, 2010,2018];

// const age1 = calcAge (year[0]);
// const age2 = calcAge (year[1]);
// const age3 = calcAge (year[year.length -1]);
// console.log(age1, age2 , age3);

// const ages = [calcAge(year[0])  ,calcAge(year[1]),
// calcAge(year[year.length-1])];
// console.log(ages)
// const friends =['michal','steven','peter'];
// friends.push('jay');
// console.log(friends);

// friends.unshift('john')
// console.log(friends)

// // Remove Element
// friends.pop();
// const popped = friends.pop();
// console.log(popped)
// console.log(friends)

// friends.shift();
// console.log(friends)

// friends.push(23)
// console.log(friends.includes('steven'))
// console.log(friends.includes ('michal'))
// console.log(friends.includes(23))

// if (friends.includes('stevn')){
//    console.log(`you have a froend called steven`)
// }


//  const calcTip = function(bill) {
//    return bill >= 50 && bill <= 300 ?bill * 0.15 : bill *0.2;
//  }

//  const bills = [125,555,44];
//  const  tips = [calcTip(bills[0]) , calcTip(bills[1]) ,calcTip(bills[2])];
//  const totals =[bills[0] +tips[0] , bills[1] + tips[1] , tips[2] + bills[2]];

//  console.log(bills , tips ,totals);



// objects

// const jonasArray = [
//    'johnas',
//    'mickty',
//    2034-684,
//    'teacher',
//    ['michal','peter', 'steven']

// ];
// const john = {
//    firstName: 'johans',
//    lastName:'lucy',
//    age:1234-1132,
//    job:'teacher',
//    friends:['michel','peter', 'steven']

// }

// console.log(jonasArray)
// console.log(john.age)


// const john = {
//    firstName: 'johans',
//    lastName: 'lucy',
//    age: 1234 - 1132,
//    job: 'teacher',
//    friends: ['michel', 'peter', 'steven']

// };
// console.log(john.lastName);
// console.log(john['lastName'])

// const nameKey = 'Name';
// console.log(john['first' + nameKey])
// console.log(john['last' + nameKey])


// const interestedIn = prompt('what do you want to know about jonas ? choose between firstname, lastName, age, job,and friends');

// // console.log(john[interestedIn]);

// if (john[interestedIn]) {
//    console.log(john[interestedIn]);

// }else {
//    console.log('wrong request ! choose between firstname ,  lastName , age , job, anf friends');

// }
// john.location = 'spain';
// john['twitter'] = '@ twitter.com';
// console.log(john);

// console.log(`${john.firstName} has ${john.friends.length} friends, and best friend is calles ${john.friends[0]}`);

///


// const john = {
//    firstName: 'johans',
//    lastName: 'lucy',
//    birthYear: 1991,

//    job: 'teacher',
//    friends: ['michel', 'peter', 'steven'],
//    hadDriverLicense: true,

//    calcAge: function () {
//       this.age = 2037 - this.birthYear
//       return this.age;
//    },
//    getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()} --year old ${john.job},and he has ${this.hadDriverLicense ? 'a' : 'no'}driver's license `
//    }

// };

// console.log(john.calcAge());
// // console.log(john['calcAge'](1991));

// console.log(john.age);
// console.log(john.age);
// console.log(john.age);

// console.log(john.getSummary())

// const mark = {
//    fullName: 'Mark Milleer',
//    mass: 78,
//    height: 1.69,
//    calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//    }
// };
// const john = {
//    fullName: 'Mark Milleer',
//    mass: 92,
//    height: 1.95,
//    calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//    }
// };
// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi , john.bmi);
// // console.log(mark.bmi);

// if (mark.bmi > john.bmi){
//    console.log("mark Bmi")
// }else  {
//    console.log("john Bmi")
// }


// for (let rep = 1; rep <= 10 ; rep = rep + 1 ){
//    console.log(`Lifting weight repetition ${rep}`);
// }

// const jonas= [
//    'johnas',
//    'mickty', 
//    2034-684,
//    'teacher',
//    ['michal','peter', 'steven']

// ];
// const types =[]

// for (let i = 0;  i< 5 ; i ++){
//    console.log(jonas[i], typeof jonas[i]);
//    types.push(typeof jonas[i]);
// }
//  console.log(types);

// const year = [1991,2007,1969,2020];
// const ages =[];

// for ( let i = 0 ; i < year.length ; i++){
//    ages.push(2037 - year[i]);
// }

// console.log(ages);

// // break and continue
// console.log(`----ONLY STING (CONTINUE)`)
// for ( let i = 0 ; i <jonas.length ; i++){
//   if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i],typeof jonas[i]);
// }

// console.log(`--- BREAK WITH NUMBERS`)
// for(let i =0 ; i < jonas.length; i++){
   
//    if (typeof jonas[i] === 'number')break;
//    console.log(jonas[i],typeof jonas[i]);
// }

// LOOP TO BACKWARDS

// const jonas= [
//    'johnas',
//    'mickty', 
//    2034-684,
//    'teacher',
//    ['michal','peter', 'steven'],
//    true

// ];

// for (let i = jonas.length -1 ;i >= 0 ; i--) {
//    console.log(i ,jonas[i]);
// }

// for (let exercise = 1 ; exercise < 4 ; exercise++){
//    console.log(`--starting exercise ${exercise}`);

//    for (let rep =1 ; rep < 6 ; rep++) {
//       console.log(`
//       exercise ${exercise}Lifting weight repetition ${rep}`);
//    }
// }
