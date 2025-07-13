const input = document.getElementById("input");
const btn = document.getElementById("btn");
const card = document.querySelector(".card");

function ImageAPI(searchEngine) {
  fetch(
    `https://api.unsplash.com/search/photos?per_page=30&query=${searchEngine}&client_id=t5F0KFNeF5aeEnTbbfCmvhZKqb2knWtaRJ8fuhu4sqs`
  )
    .then((response) => response.json())
    .then((value) => {
      card.innerHTML = "";

      value.results.forEach((value) => {
        const img = document.createElement("img");
        img.src = value.urls.small;
        img.alt = value.alt_description;
        img.style.width = "100%";
        img.style.borderRadius = "12px";
        img.style.height = "200px";

        card.appendChild(img);
      });
    });
}

btn.addEventListener("click", () => {
  const searchEngine = input.value;
  ImageAPI(searchEngine);
});
