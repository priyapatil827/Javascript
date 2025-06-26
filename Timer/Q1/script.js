const number = parseInt(prompt("Enter a number:"));
const p = $("#p");
let count = 0;
let a = 1;

setInterval(()=>{
    if(a<=number)
    {
        p.text(a);
        a++;
    }
},1000);