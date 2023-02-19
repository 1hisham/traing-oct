

// for search a spacfic number in Array

let Array = [2,3,6,945,5,5,5]
// let count = 0

// function searchNumber(findingNumber){

// for(let i = 0; i < Array.length ; i++){
//     if(Array[i] === findingNumber){
//         count++
//     }
// }
// return count

// }
// console.log(searchNumber(2));



function countAllNumbers(){
    const mapping = new Map()
    for(let i = 0; i< Array.length;i++){
    if(!mapping.has(Array[i])){
        mapping.set(Array[i],1)
    }else{
        mapping.set(Array[i], mapping.get(Array[i])+1)
      
    }
}
return mapping
}
let maps=(countAllNumbers(Array));



const statics = maps.forEach((val,key) => {
    let str =""; 
    for(let i =0; i < val ; i++){
       str += "#"

    }
    console.log(key ,str);
})


// for search a spacfic number in Array

// let Array = [2,3,6,945,5,5,5]
// let count = 0

// function searchNumber(findingNumber){

// for(let i = 0; i < Array.length ; i++){
//     if(Array[i] === findingNumber){
//         count++
//     }
// }
// return count

// }
// console.log(searchNumber(2));

