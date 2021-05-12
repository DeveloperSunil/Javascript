// features of ES11
const person = {name:'Fred',age:'873'};
console.log(Object.values(person));
console.log(Object.entries(person));
const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj));