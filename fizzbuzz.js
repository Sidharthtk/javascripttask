// const num = 20;
// const fizzbuzz = (num) => {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0) {
//             if (i % 5 == 0) {
//                 console.log("fizzbuzz");

//             }

//             else { console.log("buzz"); }


//         } else if (i % 5 == 0) {
//             console.log("fizzbuzz");

//         } else {
//             console.log("fizz");

//         }
//     }


// }
// fizzbuzz(num)



const arr=[1,2,3,4,5,]

const evennumber=()=>{
    for(let i=0;i<=arr.length;i++){
        if(arr[i]%2===1){
            console.log(arr[i]);
            
        }else{
            console.log("this is not");
            
        }
    }
}

evennumber()