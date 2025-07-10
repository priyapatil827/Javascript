const input = document.getElementById("input");
const search = document.getElementById("search");
const boxone = document.getElementById("boxone");
const country = document.getElementById("country");
const cel = document.getElementById("cel");
const id = document.getElementById("id");
const time = document.getElementById("time");
const temp= document.getElementById("temp");
const feels = document.getElementById("feels");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");

function fetchWeather(weathers)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weathers}&appid=3c1bc004fc8544f97823070974c0b328&units=metric`).then((response)=>response.json()).then((value)=>{
        country.textContent=value.name;
        id.textContent="Id :"+value.id;
        time.textContent=new Date(value.dt*1000).toLocaleTimeString();
        temp.textContent="Temperature : "+value.main.temp+"°C";
        feels.textContent="Feels :"+value.main.feels_like;
        tempMax.textContent="Maximum Temp :"+value.main.temp_max+"°C";
        tempMin.textContent="Minimum Temp :"+value.main.temp_min+"°C";
    })
}

search.addEventListener('click',()=>{
    const weathers = input.value;
    fetchWeather(weathers);
})