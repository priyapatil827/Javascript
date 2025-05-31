  let btn = document.getElementById("submit-btn");
 let copy=document.getElementById("copy-btn")

        btn.addEventListener('click', () => {
            let randomNumber = Math.random() * 16777216;
            let random = Math.floor(randomNumber);
            let color = "#"+ random.toString(16);
            document.body.style.backgroundColor=color;
            btn.textContent=color;
        });

 copy.addEventListener('click',()=>{
    color_copy = btn.textContent;

    navigator.clipboard
    .writeText(color_copy)
    .then(()=>alert("copied"+color_copy))
    .catch((err)=>alert("failed to copy"+err));
 })