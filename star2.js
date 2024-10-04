const raw = 5

for(i=1;i<=raw;i++){
    let star=""

    for(s=1;s<=raw-i;s++){
        star+=" ";

    }
    for(j=1;j<=5;j++){

        if(j===1 || i===raw || i===j){
            star+="*";
        }else{
            star+=" "
        }
        

    
}
console.log(star);

}
