const arr =[1,2,3,4,5,6,7]

function printoddnum(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===1){
            console.log(arr[i]);
            
        }
    }
    
}
printoddnum(arr)