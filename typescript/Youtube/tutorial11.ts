let employee  = {
 id : 1,
 greet: function(){
    var sef = this;
    setTimeout(function(){console.log(sef.id)}, 2000)
},




// employee.greet();
// employee.hi()
 hi : this.id,
}

console.log(employee.hi)