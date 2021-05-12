// Date 
// Date Methods(get and set)
// Time Methods(get and set)
/* Date and Time in JavaScript */
// JavaScript Date object represents a single moment in time in a plateform-independent
// format .Date Objects contain a Number that represents milliseconds since'January 1970 UTC.
// creating Date Object
// There are 4 Ways to create a new date object.
//new Date(year,month,day,hours,minutes,seconds,milliseconds) it takes 7 argument
// new Date(milliseconds)
//we cannot avoid month section
// new Date(date String)

// Date objects are created with the new Date() constructor.
let currDate = new Date();
console.log(currDate);

console.log(new Date());

console.log(new Date().toLocaleString());

console.log(new Date().toString());

// Date.now()
// return the numeric value corresponding to the current time the number of milliseconds
// elapsed since January 1,1970 00:00:00 UTC.

console.log(Date.now());

// new Date(year,Month...)
// 7 number specify year,month,day,hour,minute,second and millisecond(in that order)
//note --> JavaScript counts months from from 0 to 11.
var d = new Date(2018,11,24,10,33,30,0);
console.log(d.toLocaleString());

var d = new Date(2021,0);
console.log(d.toLocaleString())

// new Date(date String) 
// new Date(dateString) creates a new date Object from a date String.

var  d = new Date("October 13,2021 11:13:00");
console.log(d);
console.log(d.toLocaleString());

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds.
 var d = new Date(0);
 console.log(d);

 var d = new Date(1609574531435);
 console.log(d);
 var d = new Date(8640000*2);
 console.log(d.toLocaleString());

 // Dates method

 const currDate1 = new Date();
 // how to get indivisual date 
 console.log(currDate1.toLocaleString());
 console.log(currDate1.getFullYear());
 console.log(currDate1.getMonth());
 console.log(currDate1.getDate());
 console.log(currDate1.getDay());

 // how to set indivisual Date
 const currDate2 = new Date();
 console.log(currDate2.setFullYear(2022));
 // the setFullYear() method can optionally set month and day
 console.log(currDate2.setFullYear(2022,10,5));
 console.log(currDate2.setMonth(10));
 console.log(currDate2.setDate(5));
 console.log(currDate2.toLocaleString());
