const raw=5

for(i=1;i<=raw;i++){
    let star=""

    for(s=1;s<=raw-i;s++){
        star+=" ";
    }
    
    for(j=1;j<=i;j++){
        star+="*";
    }
    console.log(star);
    

}