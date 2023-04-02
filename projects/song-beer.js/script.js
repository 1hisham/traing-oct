const text = document.querySelector(".text");

let first = "";
let second;
let flag = 0;
let bottleCountOnWall = "";
let bottleCountAfter = "";

for (let i = 99; 0 <= i; i--) {
    let b = i - 1;
    if (i === 0) {
        bottleCountOnWall = "No bottles";
    } else if (i === 1) {
        bottleCountOnWall = "1 bottle";
    } else {
        bottleCountOnWall = i.toString() + " bottles";
    }
    bottleCountAfter = b.toString();
    
    
    if (bottleCountAfter === 0) {
        bottleCountAfter = "no bottle";
    }
    
    second = ` <span><br>${bottleCountOnWall} of beer on the wall, ${bottleCountOnWall}  of beer.<br>Take one down and pass it around, ${bottleCountAfter} of beer on the wall.<br></span> `;
   
    if (bottleCountAfter < 0) {
        second = `<span><br>No More bottles of beer on the wall, bottles of beer.<br>Go to the store and buy some more , 99 bottles of beer on the wall.</span> `;
    }
    first += second;
    
}
text.innerHTML = first;

//   if (flag === 0) {
//     console.log(first);
//     flag = 1;
//   }
