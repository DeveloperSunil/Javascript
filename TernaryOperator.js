// conditional(ternary) operator
// the conditional (ternary) operator is the only javascript operator that takes
// three operands
// syntax
// variablename = (condition) ? value1(true) : value2(false);
var age = 5;
var ans = (age>=18) ? "vote" : "Not vote";
console.log(ans);
console.log((age>=18) ? "vote" : "Not vote");

// three greatest value  with conditional(ternary) operator.
var a = 50;
var b = 40;
var c = 30;
console.log(a>b ? (a>c ? a : c ) : (b>c ? b : c)) ;