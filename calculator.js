const input =require('prompt-sync')()
console.log("********calculator******** \n ******chose your operator**** \n");
console.log("addiction +\n subtraction -\n division /1 multiplication *\n");

let firstnum = input("enter your first number:");
const operator = input("enter your operator:");
let secondnum = input("enter your second number:");
let num1= parseFloat(firstnum);
let num2= parseFloat(secondnum);
let result;
switch(operator){
    case"+":
    result=num1+num2;
    console.log("result is:"+result);
    break;
   
    case"-":
    result=num1-num2;
    console.log("result is:"+result);
    break;
    
    case"/":
    result=num1/num2;
    console.log("result is:"+result);
    break;
    
    case"*":
    result=num1*num2;
    console.log("result is:"+result);
    break;
    
    default:
        console.log("invalid input");
        break;
        
    
    
}
    