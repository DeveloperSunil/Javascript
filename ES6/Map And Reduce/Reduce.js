// Reduce Method 
// flatten an array means to convert the 3d or 2d array into a single dimensinal array.
// The reduce() method  executes a reducer function(that you provide) on each element
// of the array,resulting in single output value.
// The reducer  function takes four argument
//Accumulator,currentvalue,currentindex,source array
let arr = [5,6,2];
let sum = arr.reduce((accumulator,currEle,index,arr)=>{
    return accumulator+=currEle;
});
console.log(sum);
// reduce is also use to perform average sum,percentage.

let arr1 = [2,3,4,6,8];
let arr2 = arr1.map((curEle)=>curEle*2).filter((curEle)=>curEle>10).reduce((accumlator,curEle,index,arr)=>{
    return accumlator+=curEle;
});
console.log(arr2);

// how to fattern an array 
// converting 2d and 3d  array into one dimensional array

const arr3 = [
    ['Zone1','Zone2'],
    ['zone3','Zone4'],
    ['zone4','Zone5'],
    ['zone6','Zone7'],
];

const flatArray = arr3.reduce((accumlator,curVal)=>{
    return accumlator.concat(curVal);
});
console.log(flatArray);