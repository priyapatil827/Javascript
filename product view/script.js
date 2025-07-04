const products = [
  {
    id: 701,
    title: "Chocolate Truffle Cake",
    price: 18.99,
    currency: "USD",
    description: "Rich chocolate sponge layered with smooth chocolate ganache.",
    type: "Cake",
    subcategory: "Chocolate Cakes",
    weight: "1 kg",
    tags: ["Best Seller", "Eggless"],
    image:
      "https://classicfoodsbakery.com/wp-content/uploads/2020/10/35-Chocolate-truffle-cake-1-1.jpg",
    in_stock: true,
  },
  {
    id: 702,
    title: "Red Velvet Cake",
    price: 20.0,
    currency: "USD",
    description: "Soft red velvet sponge with cream cheese frosting.",
    type: "Cake",
    subcategory: "Velvet Cakes",
    weight: "1 kg",
    tags: ["New Arrival"],
    image:
      "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
    in_stock: true,
  },
  {
    id: 703,
    title: "Black Forest Cake",
    price: 17.0,
    currency: "USD",
    description:
      "Chocolate sponge, fresh cream, cherries and chocolate shavings.",
    type: "Cake",
    subcategory: "Chocolate Cakes",
    weight: "1 kg",
    tags: ["Classic"],
    image:
      "https://thecakevaults.com/wp-content/uploads/2024/10/German-Black-Forest-Cake1.jpg",
    in_stock: false,
  },
  {
    id: 704,
    title: "Mango Mousse Cake",
    price: 19.5,
    currency: "USD",
    description: "Light and airy mango mousse on a vanilla sponge base.",
    type: "Cake",
    subcategory: "Fruit Cakes",
    weight: "1 kg",
    tags: ["Season Special"],
    image:
      "https://www.spatuladesserts.com/wp-content/uploads/2022/05/Mango-mousse-cake-00468-1-500x500.jpg",
    in_stock: true,
  },
  {
    id: 705,
    title: "Blueberry Cheesecake",
    price: 22.0,
    currency: "USD",
    description: "Creamy cheesecake topped with rich blueberry compote.",
    type: "Cake",
    subcategory: "Cheesecakes",
    weight: "1 kg",
    tags: ["Best Seller"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy-AW33KiZXpR5Z6VgZDco-3zw94Z2W7qnA&s",
    in_stock: true,
  },
  {
    id: 706,
    title: "Fruit Overload Cake",
    price: 21.5,
    currency: "USD",
    description: "Vanilla sponge topped with fresh seasonal fruits and cream.",
    type: "Cake",
    subcategory: "Fruit Cakes",
    weight: "1 kg",
    tags: ["Fresh Daily", "Eggless"],
    image:
      "https://www.fnp.com/images/pr/l/v20241007112043/fruit-overload-cake-2-kg-eggless_1.jpg",
    in_stock: true,
  },
  {
    id: 707,
    title: "Butterscotch Crunch Cake",
    price: 18.5,
    currency: "USD",
    description:
      "Caramel sponge with crunchy butterscotch bits and whipped cream.",
    type: "Cake",
    subcategory: "Special Cakes",
    weight: "1 kg",
    tags: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r3ExGWvvqyKqZYB2J1E7RElb9vnbfSJe1g&s",
    in_stock: true,
  },
  {
    id: 708,
    title: "Nutella Hazelnut Cake",
    price: 23.0,
    currency: "USD",
    description:
      "Decadent chocolate sponge layered with Nutella cream and roasted hazelnuts.",
    type: "Cake",
    subcategory: "Chocolate Cakes",
    weight: "1 kg",
    tags: ["Premium"],
    image:
      "https://cdn.momsdish.com/wp-content/uploads/2022/04/Chocolate-Hazelnut-Cake-02.jpg",
    in_stock: false,
  },
  {
    id: 709,
    title: "Strawberry Cream Cake",
    price: 19.0,
    currency: "USD",
    description: "Soft sponge layered with fresh cream and real strawberries.",
    type: "Cake",
    subcategory: "Fruit Cakes",
    weight: "1 kg",
    tags: ["Season Special", "Eggless"],
    image:
      "https://magicbakers.in/wp-content/uploads/2024/01/strawberry-cream-cake.jpg",
    in_stock: true,
  },
  {
    id: 710,
    title: "Coffee Caramel Cake",
    price: 19.99,
    currency: "USD",
    description: "Moist coffee-flavored sponge with caramel drizzle.",
    type: "Cake",
    subcategory: "Special Cakes",
    weight: "1 kg",
    tags: [],
    image:
      "https://neethmedappa.com/wp-content/uploads/2022/11/Coffee-Caramel.jpg",
    in_stock: true,
  },
  {
    id: 711,
    title: "Mini Chocolate Éclair",
    price: 2.5,
    currency: "USD",
    description:
      "Soft choux pastry filled with chocolate cream and glazed on top.",
    type: "Pastry",
    subcategory: "Éclairs & Puffs",
    weight: "60 g",
    tags: ["Best Seller"],
    image:
      "https://royalcakes.com/cdn/shop/products/Eclairs_web_300x300.jpg?v=1567689110",
    in_stock: true,
  },
  {
    id: 712,
    title: "Vanilla Cream Puff",
    price: 2.0,
    currency: "USD",
    description: "Light pastry filled with vanilla custard cream cream.",
    type: "Pastry",
    subcategory: "Éclairs & Puffs",
    weight: "50 g",
    tags: [],
    image:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2017/10/17/0/VB0701H_Vanilla-and-Coffee-Cream-Puffs_s4x3.jpg",
    in_stock: true,
  },
  {
    id: 713,
    title: "Blueberry Tart",
    price: 4.0,
    currency: "USD",
    description: "Crispy tart shell filled with custard and fresh blueberries.",
    type: "Pastry",
    subcategory: "Tarts & Danish",
    weight: "90 g",
    tags: ["Fresh Daily"],
    image:
      "https://www.marthastewart.com/thmb/PPmYrYhgsbmV7TqcIQlH3auwQ08=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24edf12_e20_vert-24e56b4a5f754b54b875393389845ef7-horiz-9bd9d0154db947e3b7020a7d6199c77a.jpg",
    in_stock: true,
  },
  {
    id: 714,
    title: "Almond Croissant",
    price: 3.5,
    currency: "USD",
    description:
      "Buttery croissant filled with almond paste, topped with sliced almonds.",
    type: "Pastry",
    subcategory: "Croissants & Rolls",
    weight: "80 g",
    tags: [],
    image:
      "https://bakingamoment.com/wp-content/uploads/2024/09/IMG_4125-almond-croissant.jpg",
    in_stock: false,
  },
  {
    id: 715,
    title: "Chocolate Muffin",
    price: 2.75,
    currency: "USD",
    description: "Moist chocolate muffin with chocolate chips inside.",
    type: "Pastry",
    subcategory: "Muffins & Cupcakes",
    weight: "70 g",
    tags: [],
    image:
      "https://www.spatuladesserts.com/wp-content/uploads/2024/09/Double-chocolate-muffins-04172-1.jpg",
    in_stock: true,
  },
  {
    id: 716,
    title: "Raspberry Cream Roll",
    price: 3.1,
    currency: "USD",
    description: "Soft roll pastry with fresh raspberry cream filling.",
    type: "Pastry",
    subcategory: "Croissants & Rolls",
    weight: "80 g",
    tags: ["New Arrival"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJs_A5wGGBwN43Fub9mfaUFuJm8wCc_5HkQ&s",
    in_stock: true,
  },
  {
    id: 717,
    title: "Strawberry Danish",
    price: 3.0,
    currency: "USD",
    description: "Flaky pastry with sweet strawberry filling and glaze.",
    type: "Pastry",
    subcategory: "Tarts & Danish",
    weight: "75 g",
    tags: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SCz3sTXRt6yt2q1cqRMJq_oSU8n1Oi9Jvw&s",
    in_stock: true,
  },
  {
    id: 718,
    title: "Hazelnut Praline Pastry",
    price: 3.8,
    currency: "USD",
    description: "Layered pastry with hazelnut praline cream inside.",
    type: "Pastry",
    subcategory: "Special Pastries",
    weight: "85 g",
    tags: ["Premium"],
    image:
      "https://theobroma.in/cdn/shop/files/HazelnutPralineMoussePastry02.jpg?v=1711096565",
    in_stock: true,
  },
  {
    id: 719,
    title: "Custard Danish Swirl",
    price: 3.0,
    currency: "USD",
    description: "Sweet swirl pastry filled with vanilla custard cream.",
    type: "Pastry",
    subcategory: "Tarts & Danish",
    weight: "80 g",
    tags: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zAVTuDuuLS2I8jJUqx3rmQ7RpLNWBwDoPA&s",
    in_stock: true,
  },
  {
    id: 720,
    title: "Red Velvet Cupcake",
    price: 2.9,
    currency: "USD",
    description: "Mini red velvet sponge topped with cream cheese frosting.",
    type: "Pastry",
    subcategory: "Muffins & Cupcakes",
    weight: "60 g",
    tags: ["Eggless"],
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2023/02/vegan-red-velvet-cupcakes-1.jpg",
    in_stock: true,
  },
];

const productDiv = document.querySelector(".product");
const cartDiv = document.querySelector(".cart");
let cardList = JSON.parse(localStorage.getItem("cart")) || [];

function displayProduct() {
  products.forEach((product) => {
    const productbox = document.createElement("div");
    productbox.className = "product-box";

    const img = document.createElement("img");
    img.src = product.image;

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = product.title;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = product.description;

    const price = document.createElement("h5");
    price.className = "price";
    price.textContent = "₹" + Math.round(product.price * 80) + "/-";

    const button = document.createElement("button");
    button.className = "btn btn-dark px-5 py-2";
    button.textContent = "Add To Cart";
    button.addEventListener("click", () => {
      addToCart(product);
    });

    productbox.appendChild(img);
    productbox.appendChild(title);
    productbox.appendChild(description);
    productbox.appendChild(price);
    productbox.appendChild(button);

    productDiv.appendChild(productbox);
  });
}

function displayCart() {
  cartDiv.innerHTML = "";
  let total = 0;

  cardList.forEach((cart, index) => {
    const cartBox = document.createElement("div");
    cartBox.className = "cart-box";

    const img = document.createElement("img");
    img.src = cart.image;

    const detail = document.createElement("div");
    detail.className = "detail";

    const title = document.createElement("p");
    title.textContent = cart.title;

    const price = document.createElement("p");
    price.className = "price text-white text-center";
    price.textContent = "₹" + Math.round(cart.price * 80) + "/-";

    const button = document.createElement("button");
    button.className = "btn btn-danger";
    button.textContent = "Remove";
    button.addEventListener("click", () => {
      removeFromCart(index);
    });

    detail.appendChild(title);
    detail.appendChild(price);
    detail.appendChild(button);

    cartBox.appendChild(img);
    cartBox.appendChild(detail);

    cartDiv.appendChild(cartBox);
    total = total + cart.price;
  });

  const shipping = 50;
  let discount = 0;

  const totalRupees = Math.round(total * 80);

  if (totalRupees > 1000) {
    discount = Math.round(totalRupees * 0.1);
  }

  const grandTotal = totalRupees + shipping - discount;

  const totaldiv = document.createElement("div");
  totaldiv.className = "totaldiv text-white shadow ";

  const totalDisplay = document.createElement("h3");
  totalDisplay.className = "text-white";
  totalDisplay.textContent = "Total :  ₹ " + totalRupees + "/-";

  const shippingDiv = document.createElement("h3");
  shippingDiv.textContent = "Shipping : ₹" + shipping + "/-";
  shippingDiv.className = "text-white";

  const discountDiv = document.createElement("h3");
  discountDiv.textContent = "Discount : ₹" + discount + "/-";
  discountDiv.className = "text-white";

  const fullTotalDiv = document.createElement("h3");
  fullTotalDiv.textContent = "Grand Total : ₹" + grandTotal + "/-";
  fullTotalDiv.className = "text-white";

  totaldiv.appendChild(totalDisplay);
  totaldiv.appendChild(shippingDiv);
  totaldiv.appendChild(discountDiv);
  totaldiv.appendChild(fullTotalDiv);
  cartDiv.appendChild(totaldiv);
}

function addToCart(product) {
  cardList.push(product);
  const json = JSON.stringify(cardList);
  localStorage.setItem("cart", json);
  displayCart();
}

function removeFromCart(index) {
  cardList.splice(index, 1);
  const json = JSON.stringify(cardList);
  localStorage.setItem("cart", JSON.stringify(cardList));
  displayCart();
}

displayProduct();
displayCart();
