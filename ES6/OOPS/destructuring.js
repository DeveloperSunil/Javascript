//Destructuring  in ES6
// The destructuring assignment syntax is a javaScript expression that makes it possible 
//to unpack values from arrays,or properties from objects,into distinct variables.

// Array Destructuring
const myBioData = ['vinod','thapa',26];
// let myFname = myBioData[0];
// let myLname = myBioData[1];
// let myAge = myBioData[2];
// console.log(myFname);
// console.log(myLname);
// console.log(myAge);

// we can add values too
let[myFname,myLname,myAge,myDegree='BE'] = myBioData;
console.log(myDegree);
console.log(myFname);

// object Destructuring

const obj = {
    myName : 'sunil',
    myLastName:'Patel',
    age : 23
}

// let age = obj.age;
// let name = obj.myName;
// let myLastName = obj.myLastName;
// console.log(age);
// console.log(name);
// console.log(myLastName);

// destructring Of object
let{myName,myLastName,age,degree="BE"} = obj;
console.log(age);
console.log(myLastName)
console.log(degree);
