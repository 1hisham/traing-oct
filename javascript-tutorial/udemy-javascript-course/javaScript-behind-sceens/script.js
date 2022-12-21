'use strict';

// const restaurant = {
//   name: 'calassoco Italino',
//   location: 'via Amgelo Travento 23 frience, Italy',
//   categories: ['itanian', 'Picceria ','vergitarian', 'Orgainc'],
//   starterManu: ['Focaccia', 'Bruchaerta', 'Garlic bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'pasta', 'Risotto'],
//   openingHourns:{
//     thu: {
//       open :12,
//       close :22,
//     },
//     fri:{
//       open : 11,
//       close : 23,
//     },
//     sat:{
//       open : 0, //open 24 hours
//       close : 24 ,

//     },

//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterManu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// const{name,openingHourns,categories} = restaurant;
// console.log(   name , openingHourns,categories)

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main ;
// // main = secondary ;
// // secondary = temp ;
// // console.log(main,secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// //Recieve 2 return values fron a function
// const [starter,mainCourse] = restaurant.order(2,0);
// console.log(starter,mainCourse);

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: ' Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Genrby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Genrby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th,2037',
// //   odds: {
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // //1.
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // //2.
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // //3.
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // //.4
// // const players1Final = [...players1,'Thiago','Coutinho','Periscic'];

// // //.5
// // const {odds : {team1, x:draw,team2}} = game;
// // console.log(team1,draw);

// // //6.
// // const printGoals = function(...players){
// //   console.log(players);
// //   console.log(`${players.length} goals were scored`);

// // };

// // printGoals(...game.scored);

// // // 7.
// // team1 < team2 && console.log(`Team 1 is mote likely to win`)
// // team1 > team2 && console.log(`Team 2 is mote likely to win`);

// console.log(restaurant.openingHourns?.mon?.open);

/////therir cose 21/12/22

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // with optional change
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// //methods

// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRiotto?.(0, 1) ?? 'method does not exist');

// Array;

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// const user = [];

// console.log(user[0]?.name ?? 'User array empty');

// if (user.length > 0) console.log(user[0].name);
// else console.log('user array empty');

// // for looping elements objects

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for(const[key,{open , close}] of enteres){
//   console.log(`on ${key} we open at ${open} and close at ${close}`)
// }
// ////////////////////////Sets

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
// ]);
// console.log(orderSet);
// console.log(new Set('johanj'));

// console.log(orderSet.size)
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('garlic bread');
// orderSet.clear();
// orderSet.add('garlic bread');
// orderSet.delete('risotto');
// console.log(orderSet);

// ///////sets examples

// const staff = ['waiter','cheaf','manger','cheaf','manger','waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['waiter','cheaf','manger','cheaf','manger','waiter']).size
// );
// console.log(new Set('joooossssseeeemmmmooooo').size);

////Mapps/////////////

// const rest = new Map();
// rest.set('name ','classico Italino');
// rest.set(1,'firenze,Italy');
// console.log(rest.set(2,'Lisbon,portugal'));

// rest
//   .set('catagoris',['itaian','pizzeria','vegetarian','Organic'])
//   .set('open',11)
//   .set(true, 'we are open :D')
//   .set(false, 'we are closed.')

// console.log(rest.get('name'))

// console.log(rest.get (true))
// console.log(rest.get (false))
// console.log(rest.get (1))

// const time = 8;
// console.log(rest.has('catagories'));
// rest.delete(2)
// //rest.clear();

// const arr = [1,2];
// rest.set(arr,'Test');
// rest.set(document.querySelector('h1'),'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'what is the best programing language in the world?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javscript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again!'],
// ]);
// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`'answer'${key}:${value}`);
// }

// const answer = Number(prompt('your anwser'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert map to array

// console.log([...question]);
