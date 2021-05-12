// Default Funtion parameter
// default Function parameter allow named parameter to be initialized with
// default values if no value or undefined is passed.

function mul(a,b=10){// default parameter
    return a*b;
}
console.log(mul(5));