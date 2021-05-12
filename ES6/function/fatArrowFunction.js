// Fat Arrow Function
/*fat arrow function ko phele declare karenge phir hi call kar sakte hai.
    lekin apne function banane se phele call karenge to error dega.
*/ 
// console.log(sum());
// function sum(){
//     let a = 5, b=15;
//     let sum = a+b;
//     return `The sum of the two number is ${sum}`;
// }

// how to convert in into the fat arrow function

const sum = () => { // fat arrow function
    let a=5,b=15;
    let sum = a+b;
    return `The sum of the two number is ${sum}`;
}
console.log(sum());