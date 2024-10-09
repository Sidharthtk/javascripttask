const prompt =require('prompt-sync')()

let firstnum = parseFloat(prompt("enter your first number:"));
const operator = prompt("enter your operator:");
let secondnum = parseFloat(prompt("enter your second number:"));

if(operator==="+"){
    console.log(firstnum+secondnum);
    
}else if(operator==="-"){
    console.log(firstnum-secondnum);
    
}else if(operator==="*"){
    console.log(firstnum*secondnum);
    
}else if(operator==="/"){
    console.log(firstnum/secondnum);
    
}
