let input = document.querySelectorAll('.input');
let submit = document.querySelector('.submit');
let displayEl = document.querySelector('.display');
let addBtn = document.querySelector('.addbtn')
let container = document.querySelector('.input-container')


let totalNumbers = [];
let locatePosition = 0;
let loop = 0;




// WHEN ADD BUTTON ADDING INPUTS
addBtn.addEventListener('click',() =>{
 
 container.innerHTML += ` <input class="input" type="number"/>`;
 
})


// GRATEST NUMBER FUNTION

function greatest(totalNumbers) {
    console.log(totalNumbers);
    
    let greatestNumber = totalNumbers[0];
    // let loction = 0;
    
    for (let i = 0; i < totalNumbers.length; i++) {
   
        
        if (greatestNumber < totalNumbers[i]) {
           greatestNumber = totalNumbers[i]
        //    loction = i
        }
        
        
    }
    

    return greatestNumber;

}


// TAKE INPUT AND STORE TO AN ARRAY


input.forEach((box,index) => {
    console.log(index);
    loop++
    
    box.addEventListener('keypress', (e) =>{
          
       
        if(e.key === "Enter"){
            
            totalNumbers.push(Number(box.value))
            toTransfer(totalNumbers);

     
            if(index+1 < loop) { 
                console.log("hello");
            input[index+1].focus()
            }
            
        }
    })
    
})


function toTransfer(value){
   totalNumbers = value;
   
  }


submit.addEventListener('click', () => {
    displayElement = greatest(totalNumbers);
    console.log(displayElement);
    displayEl.innerHTML = displayElement;
    
})


            