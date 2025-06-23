const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("loginBtn");
const input = document.getElementById("input");

const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

login.addEventListener('click',()=>{
    if(email.value == "" || password.value == "")
    {
        input.textContent = "Enter the both email and password";
        input.className = "text-danger";
    }
    
    else if(emailRegx.test(email.value) && passwordRegx.test(password.value))
    {
        input.textContent = "Email and Password are valid";
        input.className = "text-success";
    }

    else if(!emailRegx.test(email.value) && !passwordRegx.test(password.value))
    {
        input.textContent = "Email and Password are invalid";
        input.className = "text-danger";
    }

    else if(!emailRegx.test(email.value))
    {
        input.textContent = "Email is invalid";
        input.className = "text-danger";
    }

    else if(!passwordRegx.test(password.value))
    {
        input.textContent = "Password is invalid";
        input.className = "text-danger";
    }
});