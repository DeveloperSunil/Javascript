// The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math.PI);

//Math.round()
// return the value of x rounded to its nearest Integer.
// note .5 ke niche Increment by one and .5 ke upar decrement by one.
let num = 10.2565;
console.log(Math.round(num));
let num1 = 10.56;
console.log(Math.round(num1));

// Math.pow()
// Math.power(x,y) returns the value of x to the power of y
console.log(Math.pow(2,3));
console.log(2**3);

// Math.sqrt()
// Math.sqrt(x) return the squareroot of x
console.log(Math.sqrt(25));
console.log(Math.sqrt(66));

// Math.abs()
// Math.abs(x) return the absolute(positive) value of x
console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));

// Math.ceil()
//Math.ceil(x) return the value of x rounded up to its nearest Integer.
console.log(Math.ceil(4.4));
console.log(Math.ceil(99.1));
console.log(Math.ceil(4.51));
console.log(Math.ceil(99.01));

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest Integer.
console.log(Math.floor(4.4));
console.log(Math.floor(99.1));
console.log(Math.floor(4.51));
console.log(Math.floor(99.01));

// Math.min()
// Math.min() can be used to find the lowest value in a list of argument
console.log(Math.min(0,150,30,20,-8,-200));

// Math.max()
// Math.max() can be used to find the Maximum value in a list of argument
console.log(Math.max(0,150,30,20,-8,-200));

//Math.random()
//Math.random() returns a random number between 0(inclusive) and 1
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

// Math.trunc()
// The trunc() method returns the integer part of a number
console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));
