//Array.prototype.map()
// it return new array mutating the original Array.
// Returns a new array containing the results of calling a function on
// every element in this array.
// map function original array ko kuch  nahi karta  oo new array return karta hai
// and uss new array ke sath ab ap kuch vi kar sakta hai. agar hum forEach ka use
// karte to oo original arrray ko hi badal raha tha.
const array1 = [1,4,9,16,25];
// num>9
let newArray = array1.map( (current,index,arr)=>{
    return current>9;
} );
console.log(array1);
console.log(newArray);