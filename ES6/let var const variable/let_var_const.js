// let vs const vs var
// var --> function scope(puray function me) 
// let and const --> block scope(only block)

function bioData(){
    var myFirstName = 'Sunil';
    console.log(myFirstName);
    if(true){
        var myLastName = 'Patel';
        console.log('inner '+myLastName);
        console.log('inner '+myFirstName);
    }
    console.log('inner outer '+myLastName);
}

bioData();

// let example

function bioData1(){
    let myFirstName1 = 'Sunil';
    console.log(myFirstName1);
    if(true){
        let myLastName1 = 'Patel';
        console.log('inner '+myLastName1);
        console.log('inner '+myFirstName1);
    }
    console.log('innerouter '+myLastName1);
}

bioData1();