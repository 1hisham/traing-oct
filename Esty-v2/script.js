"use strict";
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

const discoverlist = [
  {
    imglink: `https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg" class="query-image wt-position-absolute wt-position-top wt-position-left wt-b-xs wt-circle wt-width-full wt-height-full>`,
    caption: "Wedding",
  },
  {
    imglink: `https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg" class="query-image wt-position-absolute wt-position-top wt-position-left wt-b-xs wt-circle wt-width-full wt-height-full>`,
    caption: "Jewelllery",
  },
  {
    imglink: `https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg" class="query-image wt-position-absolute wt-position-top wt-position-left wt-b-xs wt-circle wt-width-full wt-height-full>`,
    caption: "Cloting",
  },
  {
    imglink: `https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg" class="query-image wt-position-absolute wt-position-top wt-position-left wt-b-xs wt-circle wt-width-full wt-height-full>`,
    caption: "Home & Living",
  },
  {
    imglink: `https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg" class="query-image wt-position-absolute wt-position-top wt-position-left wt-b-xs wt-circle wt-width-full wt-height-full>`,
    caption: "wall Art",
  },
  {
    imglink: `https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg" class="query-image wt-position-absolute wt-position-top wt-position-left wt-b-xs wt-circle wt-width-full wt-height-full>`,
    caption: "Kitchen & Dining",
  },
];



for (const key in discoverlist) {
  console.log(discoverlist[key].caption);

  let input = document.createElement("li");
  discoverItems.appendChild(input);
  input.innerHTML = `<img src="${discoverlist[key].imglink}" alt="">`;
  let imgText = document.createElement("span");
  input.appendChild(imgText);
  imgText.innerHTML = discoverlist[key].caption;
}


