const num=(a)=>{
    for(let i=0;i<a.length;i++){
        if(a[i]===0){
            a.push(0);       //arr push
            a.splice(i,1);   //arr splice
        }
    }
    return a
}

console.log(num([0,1,2,0,4,0,5,0,6]));
