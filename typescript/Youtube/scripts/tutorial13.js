let displayColor = function () {
    console.log(message);
    for (let i in arguments) {
        console.log(arguments[i]);
    }
};
let message = "list of color";
displayColor(message, 'red');
displayColor(message, 'red', 'blue');
displayColor(message, 'red', 'blue', 'green');
//# sourceMappingURL=tutorial13.js.map