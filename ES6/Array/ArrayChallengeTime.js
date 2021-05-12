// challenge time
// with splice() method
// Array.prototype.splice()
// splice(indexStart,deletecount,String)
// Add and/or removes elements from an array

//1. Add dec at the end of an array
// solve this question with splice method

const months = ['Jan','march','April','June','July'];
const newMonth = months.splice(months.length,0,"Dec");
console.log(months);

//2. what is the return value of splice Method
console.log(newMonth);// it gives empty array

//3. update march to March(Update)?.
// const month1 = ['Jan','march','April','June','July'];
// const updateMonth = month1.splice(1,1,'March');//but it is manually work
// console.log(month1);
const month1 = ['Jan','march','April','June','July'];
const indexOfMonth = month1.indexOf('march');
if(indexOfMonth != -1){
    const updateMonth = month1.splice(indexOfMonth,1,'March');
    console.log(month1);
}else{
    console.log('No such Data Found');
}

//4. Delete June from an array?
// splice(indexOfMonth,infinity);
const month2 = ['Jan','march','April','June','July'];
const indexOfMonth1 = month2.indexOf('June');
if(indexOfMonth != -1){
    const updateMon = month2.splice(indexOfMonth1,1)
    console.log(month2);
    console.log(updateMon);
}else{
    console.log("No Such data Found");
}


