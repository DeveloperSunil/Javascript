// how to insert,Add,Replace and Delete elements in Array(CRUD)
// perform CURD
// Array.prototype.push()
// push() method adds one or more elements to the end of an array and  
// returns the new length of the array

const animals = ['pigs','goats','sheep'];
animals.push('chicken');
console.log(animals);
const count = animals.push();
console.log(count)
animals.push('cats','cow','dog')
console.log(animals);

// Array.prototype.Unshift()
// the Unshift() method add one or more elements to the beginning of an array and
// returns the new length of the array.

const animal = ['pigs','goat','sheep'];
animal.unshift('dogs');
const count1 = animal.unshift();
console.log(count1);
animal.unshift('cat','rat','cow');
console.log(animal);

// Array.prototype.pop()
// the pop() method removes the last element from an array and 
//returns that elements. This method changes the length of the array
const plants = ['cabbage','kale','tomato','patato'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

// Array.prototype.shift()
// the shift() method removes the first element from an array and
//  returns that removed element. This method changes the length of the array.
const plants1 = ['cabbage','kale','tomato','patato'];
console.log(plants1.shift());
console.log(plants1);