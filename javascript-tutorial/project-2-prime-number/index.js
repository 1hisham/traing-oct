 let checkNumber = 0
 let count = 0
//  let count2 = 0



// if (checkNumber == 1){
//     console.log("its not a prime-number")
// }else 

   
if (checkNumber == 2){
    console.log("prime-number")

    }else if (checkNumber > 2){
    
        for (let a = 2; a < checkNumber ; a++){
            
            for (let b = 2; b < checkNumber ; b++){
               
                let sum = a  *  b
               
                // console.log(sum)

               
                if (sum == checkNumber){
                
                    
                     count = count +1
                    // console.log("its not prime number")
               
                }
                // else{
                    
                //      count2 = count2 +1
               
                //     //  console .log("primenumber")
                
                
                // }    
            } 
           
        

        }
        if (count === 0){
      
            console.log(checkNumber + "  : prime number")
        
        }else{
         
            console.log(checkNumber + " : its not a prime-number")
        
        }  

    }else{
        console.log(checkNumber + " : its not a prime-number")

    }
     

    