const button =document.querySelector(".btn");

const container=document.querySelector(".container")

button.addEventListener("click",()=>{
    alert("button is clicked")
})

container.addEventListener("mouseover",()=>{
    container.style.backgroundColor ="blue";
})

container.addEventListener("mouseleave",()=>{
    container.style.backgroundColor ="red";
    
})