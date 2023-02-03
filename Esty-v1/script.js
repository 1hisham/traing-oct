const category = document.querySelector(".category");
const discoverItems = document.querySelector(".discover-items");

const categorylist = {
  sales: "Seller's Sales Hub",
  jewellery: "jewellery & Accessories",
  wears: "Clothing & Shoes",
  home: "Home & Living",
  wedding: "Wedding & Party",
  toys: "Toys & Entertanment",
  arts: "Art & Collectibles",
  craft: "Carft Supplies",
  gift: "Gifts",
};

for (const key in categorylist) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`;
  let newList = document.createElement("li");
  newList.classList.add(key);
  newList.innerHTML = categorylist[key];
  category.appendChild(newList);
  if (key === "gift") {
    newList.innerHTML = svg + categorylist[key];
  }
}

// second section

// const discoverlist = {
//   wedding:{imglink: "link4",caption: "this is caption"},
//   jewellery:{ imglink: "li65nk", caption: "this is caption" },
//   cloting:{ imglink: "link45", caption: "this is caption" }
// }

//   for (const key in discoverlist){

//     console.log(key);

//     let input = document.createElement('li')
//     discoverItems.appendChild(input)
//     input.classList.add(key)
//     input.appendChild(document.createElement('img'))
//     input.innerHTML = value
//     input.appendChild(document.createElement('span'))

   
// }
