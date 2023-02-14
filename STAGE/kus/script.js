let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];
let thirdArray = [];
let totalLength = firstArray.length + secondArray.length;
let j = 0;
for (let i = 0; i < totalLength; i++) {
  if (secondArray[j] == undefined) {
    thirdArray = [firstArray[j]];
    console.log(thirdArray);
  } else if (secondArray[j + 1] == undefined) {
    thirdArray = [firstArray[i], secondArray[j]];
    console.log(thirdArray);
  } else if (j < secondArray.length) {
    thirdArray = [firstArray[i], secondArray[j], secondArray[j + 1]];
    j += 2;
    console.log(thirdArray);
  } else if (j > secondArray.length) {
    if (firstArray[i] !== undefined) {
      console.log(firstArray[i]);
    }

    thirdArray = thirdArray[firstArray[i]];
    console.log(thirdArray)
  }
}






















// for(let i = 0 , j = 0; i < totalLength;i++){
//     if(i == 0){
//      thirdArrey = [firstArray[i],secondArray[i],secondArray[i+1]]
//     //  console.log(thirdArrey);
//     }
//     else{
//     thirdArrey = [firstArray[i],secondArray[i+1],secondArray[i+2]]
//     // console.log(thirdArrey);

//     }
//     if(thirdArrey[i] == secondArray[secondArray.length]){
//         thirdArrey = [firstArray[i] + firstArray[i+1]]
//      console.log([thirdArrey]);

//     }

// thirdArrey = [firstArray[i],firstArray[i+1]]

// }
// thirdArrey = secondArray.push(firstArray[i])

// console.log(thirdArrey);

// let firstArray = [1,2,3,4,5]
// let secondArray = [6,7,8,9,10]
// let totalLength =  firstArray.length+secondArray.length
// let thirdArrey=firstArray
// console.log(totalLength);
// for(let i=0;i<secondArray.length; i++){
//     thirdArrey.push(secondArray[i])
// }
// console.log(thirdArrey);
