// normal function me function bannane ke  baad hum usse kahi se vi call kar 
// sakte hai upar se vi or nicche se vi...
// function argument are the real values passed to the function
// function parameter are the names listed in the function defination.
sum(20,30);//argument
function sum(a,b){//parameter
    var total = a+b;
    console.log(total);
}
//sum(20,30)//argument 

//function expression 
// function expression simply means create a function and put it into the variables.

function sum1(a,b){
    var total = a+b;
    console.log(total);
    // but it is not a fully function expression
}
var funExp = sum1(10,20);



function sum3(a,b){
     return total = a+b;
}
var funExp = sum3(5,15);
console.log('the sum of two no is '+funExp);

// Anonymous function 
// function without name  is called anonymous function.

var funExp = function(a,b){
    return total = a+b;
}
//console.log(funExp(5,5)); 

var sum = funExp(15,15);
var sum1 = funExp(20,15);
console.log(sum>sum1);
console.log(sum);
