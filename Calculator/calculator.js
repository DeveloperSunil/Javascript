class Calculator{
    constructor(){
        this.numOne = "";
        this.numTwo = "";
        this.result = "";
        this.previousResult="";
        this.operation = "";
    }
    add(){
        this.result = this.numOne + this.numTwo;
    }

    subtract(){
        this.result = this.numOne - this.numTwo;
    }

    setNumOne(value){
        this.numOne = value
    }
    setNumTwo(value){
        this.numTwo = value
    }
}
const calculator = new Calculator();

const mainDisplay = () =>{

}
const secondaryDisplay = () =>{

}
const numClickHandler = (num)=>{
    
    console.log(num);
}