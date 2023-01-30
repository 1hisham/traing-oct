let totalNumbers = [4, 5, 6, 7, 3,15, 2];



function greatest(totalNumbers) {

    let greatestNumber = totalNumbers[0];

    for (let i = 0; i < totalNumbers.length; i++) {
   
        
        if (greatestNumber < totalNumbers[i]) {
           greatestNumber = totalNumbers[i]
         }
    
        
    }

    return greatestNumber;

}
console.log(greatest(totalNumbers));
