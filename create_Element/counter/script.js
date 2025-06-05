const counter=document.getElementById("counter");
const add=document.getElementById("add-Btn");
let count=0;

add.addEventListener('click',()=>{
    count++;
    const span= document.createElement("span");
    span.textContent=count;
    counter.appendChild(span);
});