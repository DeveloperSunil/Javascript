// searching and filter in an array
//Array.prototype.indexOf()
// it return the index of element if present, otherwise it gives -1 index if elment is not present. 
// indexOf(searchElement,From index)
var myFriend = ['Sunil','Rahul','Sandeep','Jayesh','Rohit'];
console.log(myFriend.indexOf('Rahul'));
console.log(myFriend.indexOf('Sandeep',4))

// Array.prototype.lastIndexOf()
// Returns the last(Greatest) index of an element within the array equal to an 
// element, or -1 if none found. it search the element last to first
var myFriend1 = ['Sunil','Rahul','Sandeep','Jayesh','Rohit'];
console.log(myFriend1.lastIndexOf('Rohit'));
console.log(myFriend1.lastIndexOf('Jayesh',4));

// Array.prototype.includes()
// Determines whether the array contains value returning true or false as appropriate.

console.log(myFriend.includes('Rahul'));
console.log(myFriend.includes('rahul'));
console.log(myFriend.includes('Sunil',0));

// filteration
// Array.prototype.find()
// Returns the found element in the array

const prices = [200,300,350,400,450,500,600];
console.log(prices.find((value)=>value<300));
console.log(prices.find((currval)=>currval<400));

const findEle=prices.find((curEle)=>{
    return curEle<400;
})
console.log(findEle);

// Array.prototype.findIndex()
// return the found index in the array, 
//if an element in the array satisfies the testing function or -1 if not found.
// 0 gives if data is present.
const prices1 = [200,300,350,400,450,500,600];
console.log( prices1.findIndex((currEle)=>{
    return currEle<400
}));

// Array.prototype.filter()
// return a new array containing all elements of the calling.
// array for which the provided filtering function return true

const price = [200,300,350,400,450,500,600];
const newPriceTag = price.filter((ele,index)=>{
    return ele<400;
});
console.log(newPriceTag);

const newPriceTag1 = price.filter((ele,index)=>{
    return ele>1400;
});
console.log(newPriceTag1);//it gives empty array

// sort 
// Array.prototype.sort()
// the sort method sorts the elements of an array in place and returns
// the sorted array. The default sort order is ascending, built upon converting
// the elements into strings then comparing their sequences of utf-16 code unit values.
const months = ['March','Jan','Feb','Dec','Nov'];
console.log(months.sort());

const array1 = [1,30,4,21,100000,99];
console.log(array1.sort());

