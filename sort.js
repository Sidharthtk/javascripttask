const num=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp =arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
        
        
    }
    return arr
    

}


console.log(num([2,4,1,5,3]));

