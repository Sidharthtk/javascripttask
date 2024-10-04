const raw=5

for(let i=1;i<=raw;i++){
    let star="";

    for(let j=1;j<=i;j++){
        star +="*";
    }

    for(let s=1;s<=2*raw-(2*i);s++){
        star +=" ";
    }
    
    for(let j=1;j<=i;j++){
        star +="*";
    }
    console.log(star);
    
}

for(let i=raw-1;i>=1;i--){
    let star="";

    for(let j=1;j<=i;j++){
        star +="*";
    }

    for(let s=1;s<=2*raw-(2*i);s++){
        star +=" ";
    }
    
    for(let j=1;j<=i;j++){
        star +="*";
    }
    console.log(star);
    
}