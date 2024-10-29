const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const arrayreplace=(arr)=>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]%3===0){
            arr[i]=0;
        }else if (arr[i]%5===0){
            arr[i]=1;
        }

    
    }
    return arr;
}
console.log(arrayreplace(arr));

