const raw=5

for(let i=1;i<=raw;i++){
    let ptrn=" ";
    for(let j=1;j<=5;j++){
        if(i===raw || i===1 || j===raw-i+1){
        ptrn +="* "
    }else{
        ptrn+="  "
    }
}
    
    console.log(ptrn);
    
}