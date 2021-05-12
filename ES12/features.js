// ES 12 features
// bigInt

let oldNumber = Number.MAX_SAFE_INTEGER;
console.log(oldNumber);
console.log(oldNumber +12);//fail the range
const newNumber = 9007199254740991n + 12n;
console.log(newNumber);
console.log(typeof(newNumber));
