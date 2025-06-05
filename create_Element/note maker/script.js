const input=document.querySelector("#notes");
const btn=document.querySelector("#btn");
const output=document.querySelector("#output");

btn.addEventListener('click',()=>{
    const value=input.value;
    const span=document.createElement("span");
    span.textContent=value;
    output.appendChild(span);
    input.value=" ";
});