
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");
const h2 = document.getElementById("h2");
const p = document.getElementById("p");
const shop = document.getElementById("shop");

let mode;
let color;

btn.addEventListener('click',()=>{
  if(mode)
  {
    
      document.body.style.backgroundColor="#522546";
      color="white";
      h1.style.color="#FFDCDC";
      nav.style.backgroundColor = "#522546";
      navLinks.forEach(link => link.style.color = "#FFDCDC");
      h2.style.color="#FFDCDC";
      p.style.color="#FFDCDC";
      shop.style.background = "linear-gradient(90deg, #FFDCDC,rgb(239, 191, 191))";
      shop.style.color = "#522546";
      

      btn.textContent = "ON";
      btn.style.backgroundColor = "#FFDCDC";
      btn.style.color = "#522546";

  }
  else
  {
    document.body.style.backgroundColor="#FFDCDC";
    color="black";
    h1.style.color="#522546";
    nav.style.backgroundColor = "#FFDCDC";
    navLinks.forEach(link => link.style.color = "#522546");
    h2.style.color="#522546";
    p.style.color="#6c757d";
    shop.style.background = "linear-gradient(90deg, #522546, #b677a5)";
    shop.style.color = "white";

    btn.textContent = "OFF";
    btn.style.backgroundColor = "#522546";
    btn.style.color = "#FFDCDC";
  }
  mode=!mode;
})