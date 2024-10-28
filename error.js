console.log("first");


try{
    const a=5;
    if(a<10){
        throw new Error("a is smaller");
        
    }
}catch(error){
    console.log(error.message);
    
}
console.log("second");

