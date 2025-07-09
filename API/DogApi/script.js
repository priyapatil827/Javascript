const img = document.getElementById("img");
const btn = document.getElementById("btn");

function fetchApi() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((value) => {
      const image = value.message;
      img.src = image;
    });
}

btn.addEventListener("click", () => {
  fetchApi();
});

fetchApi();
