// What is object literal?
// what is "this" object?

//What is object literal?
// object literal is simply a key:value pair data structure.
// storing variables and functions together in one container.
// we can refer this as an objects.
// object = schoolbag

// how to create a object?
// 1st way
let bioData={
    myName:"sunil patel",
    myAge:23,
    getData:function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
console.log(bioData.myName);
bioData.getData();

// 2nd way no need to write function as well as after es6

let bioData1={
    name : 'sunil',
    age : 23,
    data(){ 
        console.log(`my name ${bioData1.name} and ${bioData1.age}`);
    }
}
console.log(bioData1.name);
console.log(bioData1.age);
bioData1.data();

// What if we want object as a value inside an object

let bioData2 = {
    name1:{
        realname:"patel",
        channel:'patel technical'
    },
    age1:23,
    getData1(){
        console.log(`my name is ${bioData2.name1.realname} and my channel is ${bioData2.name1.channel}`);
    }
}
bioData2.getData1();
console.log(bioData2.name1.channel);
