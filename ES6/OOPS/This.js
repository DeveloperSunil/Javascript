// what is this object
// the defination of this object is that it contain the current context.
// the this object can have diffent values depending on where it is placed.
// for example

//console.log(this.alert('Awesome'));
// it refers to the current context and that is window global object.

// ex2
// function myName(){
//     console.log(this);
// }
// myName();

// ex3 

let myNames = 'sunil';
function myName(){
    console.log(this.myNames);
}
myName();

// ex 4
const obj ={
    myAge : 26,
    myName(){
        console.log(this);
        console.log(this.myAge);
    }
}
obj.myName();



//ex 5
let bioData = {
    myName:{
        realName : 'Vinod Thapa',
        channelNa: "sunil technical"
    },
    myAges : 23,
    get(){
        console.log(`My name is ${this.myName.channelNa} and my age is ${this.myAges}`);
    }

}
bioData.get();