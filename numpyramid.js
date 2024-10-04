for(let i=1;i<=5;i++){
    let ptrn=" ";
    for(let s=1;s<=5-i;s++){
        ptrn +=" ";
    }
    for(let j=1;j<=i*2-1;j++){
        ptrn +=j
    }
    console.log(ptrn);
    
}

