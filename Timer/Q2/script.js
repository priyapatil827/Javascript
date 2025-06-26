const p1 = $("#p1");
const p2 = $("#p2");
let date = new Date();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

setInterval(()=>{
    p1.text(date.getDate()  +"/"+ monthNames[date.getMonth()] +"/"+ date.getFullYear());
    p2.text(date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
    date = new Date();
},1000);
