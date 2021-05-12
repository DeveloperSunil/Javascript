var count=1;
function fill(control){
    if(count<=9){
        if(count%2!=0){
            document.getElementById(control.id).innerHTML="X";
        }else{
            document.getElementById(control.id).innerHTML="O";
        }
        count++;
    }else{
        alert("Match Draw");
        reset();
    }
   
}
function reset{
    for(var i=1;i<=9;i++){
        document.getElementById('div'+i);
    }
}
