const fetchData=new Promise((res,rej)=>{
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((Response)=> Response.json())
    .then((result)=>{
        res(result);
    })
    .catch((err)=>{
        rej(err);
    })
});

console.log(fetchData);

fetchData
 .then((res)=>{
    console.log(res);
    
 })
 .catch((err)=>{
    console.log(err);
    
 });



//  async function fetchData() {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const result=await response.json();
//     console.log(result);
    
    
//  }