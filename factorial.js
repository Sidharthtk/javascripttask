// const findfactorial=(num) => {
//     if(num===1){
//         return 1;

//     }
//     return num *findfactorial(num -1);
// }

// console.log(findfactorial(6));


// const factorial=(num) =>{

//     let fact=1;

//     for(i=num;i>=1;i--){

//         fact=fact*i
        
//     }
//     return fact
        
    
       
// }
// console.log(factorial(6));

const count=(a) =>{
    let large=a[0];

   for(let i=0;i<a.length;i++){

    if(a[i]>large){
        large=a[i];
    }

   }
   return large


}
console.log(count([10,25,45,34,22,50]));


