// we have 5 falsy value in js
// 0,"",undefined,null,NaN,false
var score;
// when we put falsy value in if condition then it always execute the else portion.
if(score=0){
    console.log("loss");
}else{
    console.log("win");
}

if(score=null){
    console.log("loss");
}else{
    console.log("win");
}

if(score=false){
    console.log("loss");
}else{
    console.log("win");
}

