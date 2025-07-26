  const input = document.getElementById("input");
    const search = document.getElementById("search");
    const main = document.getElementById("main");
    const favList = document.getElementById("fav-List");

    let allCountries = [];
    const favorites = [];

    function saveFavorites() {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    function loadFavorites() {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        favorites.push(...JSON.parse(stored));
      }
    }

    function FavoriteItem(country) {
      const favItem = document.createElement("div");
      favItem.className = "fav-item";

      const img = document.createElement("img");
      img.src = country.flags.png;
      img.width = 60;
      img.height = 40;

      const name = document.createElement("h5");
      name.textContent = country.name.common.toUpperCase();

      const capital = document.createElement("p");
      capital.textContent = "Capital: " + (country.capital || "N/A");

      const delBtn = document.createElement("button");
      delBtn.textContent = "Unfavorite";
      delBtn.style.marginTop = "5px";
      delBtn.style.background = "#dc3545";
      delBtn.style.color = "white";
      delBtn.style.border = "none";
      delBtn.style.padding = "5px 10px";
      delBtn.style.borderRadius = "5px";
      delBtn.style.cursor = "pointer";

      delBtn.addEventListener("click", () => {
        favItem.remove();
        const index = favorites.indexOf(country.name.common);
        if (index > -1) favorites.splice(index, 1);
        saveFavorites();
      });

      favItem.appendChild(img);
      favItem.appendChild(name);
      favItem.appendChild(capital);
      favItem.appendChild(delBtn);

      favList.appendChild(favItem);
    }

    function addToFavorites(country) {
      if (!favorites.includes(country.name.common)) {
        favorites.push(country.name.common);
        saveFavorites();
        FavoriteItem(country);
      }
    }

    function displayAPI(countries) {
      main.innerHTML = "";
      countries.forEach((country) => {
        const div = document.createElement("div");
        div.className = "box";

        const img = document.createElement("img");
        img.src = country.flags.png;

        const countryName = document.createElement("h3");
        countryName.textContent = country.name.common.toUpperCase();

        const capital = document.createElement("h5");
        capital.textContent = "Capital: " + (country.capital || "N/A");

        const favBtn = document.createElement("button");
        favBtn.textContent = "Add to Favourite";
        favBtn.addEventListener("click", () => {
          addToFavorites(country);
        });

        div.appendChild(img);
        div.appendChild(countryName);
        div.appendChild(capital);
        div.appendChild(favBtn);

        main.appendChild(div);
      });
    }

    function fetchApi() {
      fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies")
        .then((response) => response.json())
        .then((data) => {
          allCountries = data;
          displayAPI(data);
          loadFavorites();
          allCountries.forEach((country) => {
            if (favorites.includes(country.name.common)) {
              FavoriteItem(country);
            }
          });
        });
    }

    search.addEventListener("click", () => {
      const keyword = input.value.trim().toLowerCase();
      const filtered = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(keyword)
      );
      displayAPI(filtered);
    });

    fetchApi();