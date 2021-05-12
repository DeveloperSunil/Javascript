//1. find the square root of each element in an array.
let arr = [25,36,49,64,81];
let arrSquare = arr.map((value)=>{
    return Math.sqrt(value);
});
console.log(arrSquare);
console.log(arr);

//2. Multiply each element by 2 and return only those elements which are greater than 10
let arr1 = [2,3,4,6,8];
// we can use the chaining too
let arr2 = arr1.map((curval)=>{
    return curval*2;
}).filter((curval)=>{
    return curval>10;
});
console.log(arr2);
console.log(arr1);
// short code of chainning
let arr3 = [2,3,4,6,8];
let arr4 = arr3.map((curval)=>curval*2).filter((curval)=> curval>10);
console.log(arr4);