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

const calcAverage = (a ,b ,c) => (a+b+c)/3;
console.log(calcAverage(44,23,71));
 
////
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
   if (avgDolphins >= 2 * avgKoalas
      ){
      console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);

   }else if (avgKoalas >= 2*avgDolphins) { 
      console.log(`kovals win (${avgKoalas} vs ${avgDolphins})`)
   }else{
   console.log('no team wins..');
}
}
checkWinner (scoreDolphins, scoreKoalas);
checkWinner(576,111);


//test
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23 , 14 ,9);

console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);