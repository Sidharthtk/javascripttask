const button =document.getElementById("btn");
const container =document.getElementById("container");

let postnumber=1;

button.addEventListener("click",()=>{

    //create a new XMLHttprequest object
    let myrequest = new XMLHttpRequest();

    //configure it:GET-request for the url/example
    myrequest.open("GET",`https://jsonplaceholder.typicode.com/posts/${postnumber}`);

    //send the request over the network
    myrequest.send();

    //this will be called after the response is recieved 
    myrequest.onload=function(){
        if(myrequest.status !=200){
            //analyze HTTP response status
            console.log(`Error ${myrequest.status}: ${myrequest.statusText}`);
            
        }else{
            //show the result
            console.log(JSON.parse(myrequest.response));//response is the server
            const result=JSON.parse(myrequest.response);

            // result.map((item,i))=>{
                const li =document.createElement("li");
                li.textContent=result.title;
                li.style.color="blue";
                li.style.cssText="padding:6px; background-color:aqua; color:red"
                container.append(li);

                postnumber++;
                
            }
            
        };
        myrequest.onerror=function(){
            console.log("request failed");
            
        }

});