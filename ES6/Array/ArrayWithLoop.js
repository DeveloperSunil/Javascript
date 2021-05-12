// Array
var myFriend = ['Sunil','Rahul','Sandeep','Jayesh','Rohit'];
var length = myFriend.length;
console.log(length);

for(let i = 0; i<myFriend.length; i++){
    console.log(myFriend[i]);
}
// After ES6 we have for in and for of loop too.
// for in -> loop gives always  index of element.
for(let index in myFriend){
    console.log(index);
}

// for of --> loop gives the element of array;
for(let elements of myFriend){
    console.log(elements);
}

// Array.prototype.forEach()
// calls a function forEach element in the array.
// Note- in forEach loop we do not use a break statement.
var myFriends = ['Vinod','Ramesh','Arjun','Vishal'];
myFriends.forEach(function(element,index,array){
    console.log(element);
    console.log(element+" "+"index: "+index+" "+array)
});

//  forEach loop with the help of Fat Arrow Function.
//  Note- in fat arrow function we cannot use this keyword.
//  if you want to use this keyword then you can use normal function/traditional function.
myFriends.forEach((element,index,array)=>{
    console.log(element);
    console.log(element+" "+"index: "+index+" "+array);
})