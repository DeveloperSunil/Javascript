// String 
// String.prototype.length
// reflect the length of the string
 let myName = "Sunil";
 console.log(myName.length);

 //Escape sequence-->  \"\"
 let anySentence = "We are the so called \"vikings\"  from the north.";
 console.log(anySentence);

 // if you dont want to mess, simply use the alternate quotes.
 let anySentence1 = 'We are the so called "vikings"  from the north.'
 console.log(anySentence1);

 // finding a string in a string
 // String.prototype.indexOf(searchvalue,from index)
 // the indexOf() method returns the indexof(the position of) the first occurance of a specified text in a string.
 const myBioData = "I am the Thapa Techincal";
 console.log(myBioData.indexOf('t'));
 console.log(myBioData.indexOf('t',6));

 //String.prototype.lastIndexOf(SearchValue,[from index])
 // Retrn the index within the calling String object Of the Last occurrence of
 //search value, or -1if not found.

 const myBioData1 = 'I am the Thapa Techincal';
 console.log(myBioData1.lastIndexOf('t',6));

 // searching for a String in a String.
 // String.prototype.search(regexp)
 // The search() method searches a string for a specified value and returns
 // the position of the Match
 const myData = 'I am the Thapa Techincal';
 console.log(myData.search('Thapa'));

 // Extracting String parts.
 // there are 3 methods for exactring a part of a String.
 // slice(start,end)
 // substring(start,end)
 // substr(start,length)

 // slice() method
 // slice() extracts a part of aa substring and returns the extracted part in a
 // new string.
 //the method takes 2 parameter the start postion and the end position(end not included)
// Note: The original will not be changed.
 var str = "Apple,Bannana,Kiwi";
 var res = str.slice(0,4);
 console.log(res);
 console.log(str.slice(7));
 console.log(str.slice(7,-2));
console.log(str);

//replace() Method
let myBioData2 ='SUNIL';
let replaceData = myBioData2.replace('SUNIL','sunil');
console.log(replaceData);

//toUpperCase() Method
let myName1 = 'Sunil Patel';
console.log(myName1.toUpperCase());

//toLowerCase() Method
let myName2 = 'MONA PATEL';
console.log(myName2.toLowerCase());

// the concat() Method
// concat() Joins two or more Strings
let fName = 'sunil';
let lName = 'patel';
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));

// String.trim()
// The trim() method removes whitespace  from both sides of a String.
var str1 ="               Hello                    World             ";
console.log(str1.trim());

// converting a String into an Array
// A String can be converted to an array with the spilt() method
var txt ='a,b,c,d,e,f';
console.log(txt.split(","));
var txt2 ='a,b,c,d,e,f';
console.log(txt2.split(" "));
console.log(txt2.split("|"));