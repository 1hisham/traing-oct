let displayColor = function(message, ...color){

    // console.log(message);

    for(let i in color){
    console.log(color[i])

    }
}

let message = "list of color"

displayColor(message,'red');
displayColor(message,'red','blue');
displayColor(message,'red','blue','green');