const food = [
    {
        "id": 1,
        "title": "Vegetable Stir Fry",
        "ingredients": ["broccoli", "carrot", "bell pepper", "soy sauce", "garlic"],
        "instructions": "Chop veggies. Stir fry in oil with sauce until tender.",
        "prepTime": "20 minutes",
        "difficulty": "Easy",
        "cuisine": "Chinese",
        "image": "https://i.pinimg.com/736x/67/f1/6c/67f16cf642ae37fbce4e5c74b322b045.jpg"
    },
    {
        "id": 2,
        "title": "Paneer Butter Masala",
        "ingredients": ["paneer", "tomatoes", "cream", "butter", "spices"],
        "instructions": "Cook paneer. Blend tomato gravy. Simmer with butter and cream.",
        "prepTime": "40 minutes",
        "difficulty": "Medium",
        "cuisine": "Indian",
        "image": "https://i.pinimg.com/1200x/9a/65/90/9a65906e09943ce49c876dbe7509af86.jpg"
    },
    {
        "id": 3,
        "title": "Greek Salad",
        "ingredients": ["tomato", "cucumber", "feta cheese", "olives", "olive oil"],
        "instructions": "Chop ingredients and mix with olive oil and seasoning.",
        "prepTime": "10 minutes",
        "difficulty": "Easy",
        "cuisine": "Greek",
        "image": "https://i.pinimg.com/736x/6e/03/53/6e035330aa29714274443e571152f577.jpg"
    },
    {
        "id": 4,
        "title": "Mushroom Risotto",
        "ingredients": ["arborio rice", "mushrooms", "onion", "garlic", "parmesan"],
        "instructions": "Cook onions, add rice, stir in broth gradually, then mushrooms and cheese.",
        "prepTime": "45 minutes",
        "difficulty": "Medium",
        "cuisine": "Italian",
        "image": "https://i.pinimg.com/1200x/27/a8/aa/27a8aa5c49aa5cf4a64f03c041f6cde4.jpg"
    },
    {
        "id": 5,
        "title": "Aloo Gobi",
        "ingredients": ["potatoes", "cauliflower", "turmeric", "tomato", "spices"],
        "instructions": "Saute spices, add potatoes and cauliflower, cook until tender.",
        "prepTime": "30 minutes",
        "difficulty": "Easy",
        "cuisine": "Indian",
        "image": "https://i.pinimg.com/736x/bc/e6/70/bce6708952226e5cd34ec0976aa8c19d.jpg"
    },
    {
        "id": 6,
        "title": "Caprese Salad",
        "ingredients": ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic glaze"],
        "instructions": "Layer ingredients and drizzle with olive oil and balsamic.",
        "prepTime": "10 minutes",
        "difficulty": "Easy",
        "cuisine": "Italian",
        "image": "https://i.pinimg.com/736x/d6/ea/cd/d6eacd622d40b9dd26453c007a07908d.jpg"
    },
    {
        "id": 7,
        "title": "Veggie Burger",
        "ingredients": ["burger buns", "black beans", "onion", "lettuce", "cheese"],
        "instructions": "Make patty from mashed beans and spices, cook and assemble burger.",
        "prepTime": "35 minutes",
        "difficulty": "Medium",
        "cuisine": "American",
        "image": "https://i.pinimg.com/1200x/c2/67/9c/c2679cafd08e18300a4eece0010bd442.jpg"
    },
    {
        "id": 8,
        "title": "Spinach and Ricotta Lasagna",
        "ingredients": ["lasagna sheets", "spinach", "ricotta", "tomato sauce", "cheese"],
        "instructions": "Layer sheets with spinach mix and sauce, bake until golden.",
        "prepTime": "50 minutes",
        "difficulty": "Medium",
        "cuisine": "Italian",
        "image": "https://i.pinimg.com/1200x/ed/d8/37/edd837fbb1f846c983db7ce9a39f8463.jpg"
    },
    {
        "id": 9,
        "title": "Chickpea Curry",
        "ingredients": ["chickpeas", "onion", "tomatoes", "garlic", "spices"],
        "instructions": "Saute onions and spices, add chickpeas and tomatoes, simmer.",
        "prepTime": "35 minutes",
        "difficulty": "Easy",
        "cuisine": "Indian",
        "image": "https://i.pinimg.com/736x/e1/33/2a/e1332ab4a8cc651f278da71986def03c.jpg"
    },
    {
        "id": 10,
        "title": "Zucchini Noodles",
        "ingredients": ["zucchini", "olive oil", "garlic", "parmesan", "basil"],
        "instructions": "Spiralize zucchini, sauté in oil and garlic, top with cheese and basil.",
        "prepTime": "15 minutes",
        "difficulty": "Easy",
        "cuisine": "Low-carb",
        "image": "https://i.pinimg.com/736x/5a/84/32/5a8432bcd570cced28d27ee4eff2a2e4.jpg"
    }
]

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const p = document.getElementById("p");
const mainDiv = document.getElementById("mainDiv");

function displayRecipe(title) {
    const foods = food.find(foods => foods.title.toLowerCase() === title.toLowerCase());

    if (title) {
        const box = document.createElement("div");
        box.className = "box";


        const h1 = document.createElement("h1");
        h1.textContent = foods.title;

        const img = document.createElement("img");
        img.src = foods.image;

        const ingredients = document.createElement("p");
        ingredients.innerHTML = "<b>Ingredients</b> : " + foods.ingredients;
        ingredients.className = "ing";

        const cuisine = document.createElement("p");
        cuisine.innerHTML = "<b>Cuisine</b> : " + foods.cuisine;
        cuisine.className = "cuisine";


        const delte = document.createElement("button");
        delte.textContent = "Delte";
        delte.className = "btn btn-danger ";
        delte.addEventListener('click', () => {
            delteRecipe(box);
        })

        const edit = document.createElement("edit");
        edit.textContent = "edit";
        edit.className = "btn btn-success";




        box.appendChild(h1);
        box.appendChild(img);
        box.appendChild(ingredients);
        box.appendChild(cuisine);

        box.appendChild(delte);
        box.appendChild(edit);

        mainDiv.appendChild(box);
    }
    else {
        alert("Recipe not found");
    }



}



addBtn.addEventListener('click', () => {
    const title = input.value;
    displayRecipe(title);
})


function delteRecipe(element) {
    element.remove();
}



