const num =(a)=>{
    let sum=0;
    

    // for(let i=0;i<a.length;i++)
        while(a>0){
        let digit=a%10
        a=a/10;
        a=parseInt(a)
        
        

        sum+=digit,a;

    }
    return sum;
}
console.log(num(56));




