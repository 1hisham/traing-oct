let freshArray = [1,2,5,3,5,3,5,2]
let obj;
let amountArray = [];
let count = 0;

for(let i =0 ; i< freshArray.length;i++){
        obj = [freshArray[i],count]
        amountArray.push(obj)
        console.log(amountArray);
        toCheckArray(i,amountArray)




}


function toCheckArray(i,amountArray){
    for(let j = 0 ;j <= i;j++){
        if (amountArray[j][0] == freshArray[i]){
            count++
        }
        obj = [freshArray[i],count]
        console.log(obj);
        amountArray.push(obj)
        console.log(amountArray);

    }
    count = 0



}

