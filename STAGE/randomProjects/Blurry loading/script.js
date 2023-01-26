const bg = document.querySelector('.bg');
const loadText  = document.querySelector('.loading-text');

let load = 0 ;

let int = setInterval(blurring,30);

function blurring(){
    load++;

    if (load > 99){
        clearInterval(int);
        
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = `${1 - load / 100}`;
    bg.style.filter = `blur(${(load,blurring())}px)`;
}
// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
//   };


// let io = 0 ;

// function blurring(x) {

//     for(let x = 0 ; x < 30; x++){

//         // setInterval( blurring() , 1000)
//         console.log(x)
       
//     //  console.log(typeof x , x);
//     }
//     // return x  
// }
// console.log(b;);
