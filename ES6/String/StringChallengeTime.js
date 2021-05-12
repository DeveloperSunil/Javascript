// String Challenge Time
// Display only 280 character of a string like one used in Twitter?
let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
let myActualTweet = myTweets.slice(0,280);
console.log(myActualTweet);

// Extracting String Characters
// there are 3 methods for Extracting String Character:
// charAt(position)
// charCodeAt(position)
// propertyaccess[]

// charAt() Method
// The charAt() Method returns the charcter at a specified index(position) in a string
let str = "Hello World";
console.log(str.charAt(0));

// The charCodeAt() method
// The charCodeAt() method returns the unicode of the character at a specified index in
// a string: the method returns  a utf-16 code(can integer between 0 anf 65535).

var str1 = "Hello World";
console.log(str1.charCodeAt(0));

// Return the unicode of the last character in a String
let str2 ="HELLO WORLD";
let lastChar = str2.length-1;
console.log(str2.charCodeAt(lastChar));

// property access
// ECMAScript 5(2009) allows propertyaccess[] on Strings
var str3 = "Hello WORLD";
console.log(str3[0]);

