let number = 123456
let c = 0


for(let i= 2; i<Math.trunc(Math.sqrt(number))+2; i++){
if(number%i==0){
    c = c+1
}
}
if(c===0){
    console.log("prime")
}else{
    console.log("not");
}
