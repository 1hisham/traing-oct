"use strict";
const category = document.querySelector(".category");
const discoverItems = document.querySelector(".image-container");
const dealsCard = document.querySelector(".image-cards");
const shopSelection = document.querySelector(".shop-selection");

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
  // newList.classList.add(key);
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
  let input = document.createElement("li");
  discoverItems.appendChild(input);
  input.innerHTML = `<img src="${discoverlist[key].imglink}" alt="">`;
  let imgText = document.createElement("span");
  input.appendChild(imgText);
  imgText.innerHTML = discoverlist[key].caption;
}

const imgaeCardsItems = [
  {
    imglink: `https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg`,
    discount: `Up to 40% off on`,
    caption: `Women's Ethnic Clothing`,
  },
  {
    imglink: `https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg`,
    discount: `Up to 40% off on`,
    caption: `Women's Western clothing`,
  },
  {
    imglink: `https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg`,
    discount: `Up to 40% off on`,
    caption: `Men's Clothing`,
  },
  {
    imglink: `https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg`,
    discount: `Up to 40% off on`,
    caption: `Fashion Jewellwey`,
  },
  {
    imglink: `https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg`,
    discount: `Up to 40% off on`,
    caption: `Winter Clothing`,
  },
  {
    imglink: `https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg`,
    discount: `Up to 40% off on`,
    caption: `Wedding Clothing`,
  },
];

function deaOfDay(
  objectData,
  elementOne,
  elementTwo,
  elementThree,
  elementFour,
  elementFive
) {
  dealOfTheDay();

  for (const key in objectData) {
    // console.log(objectData[key].caption);
    let inputImage = document.createElement(elementOne);
    inputImage.setAttribute("src", `${objectData[key].imglink}`);
    let listcontainer = document.createElement(elementTwo);
    let angerTag = document.createElement(elementThree);
    let discountContainer = document.createElement(elementFour);
    let itemName = document.createElement(elementFive);

    discountContainer.innerHTML = imgaeCardsItems[key].discount;
    itemName.innerHTML = imgaeCardsItems[key].caption;

    listcontainer.appendChild(inputImage);
    listcontainer.appendChild(angerTag);
    angerTag.appendChild(discountContainer);
    angerTag.appendChild(itemName);
    dealsCard.appendChild(listcontainer);
  }
}
deaOfDay(imgaeCardsItems, "img", "li", "a", "p", "span");

const selectionItems = [
  {
    imageURl: `https://i.etsystatic.com/22038449/r/il/23ab17/3432204051/il_340x270.3432204051_bu5x.jpg`,
    caption: `The Festive Shop`,
  },
  {
    imageURl: `https://i.etsystatic.com/30973456/c/1736/1379/267/1120/il/598a23/3655008446/il_340x270.3655008446_cp75.jpg`,
    caption: `The Wedding Shope`,
  },
  {
    imageURl: `https://i.etsystatic.com/17600118/c/1132/903/0/0/il/8b4129/2591412730/il_340x270.2591412730_abof.jpg`,
    caption: `Fashion finds`,
  },
  {
    imageURl: `https://i.etsystatic.com/32541884/r/il/a56807/3849973862/il_340x270.3849973862_p1w4.jpg`,
    caption: `For your home`,
  },
  {
    imageURl: `https://i.etsystatic.com/18899984/r/il/9dcc31/4228096205/il_340x270.4228096205_fueu.jpg`,
    caption: `Everyday inspiration`,
  },
  {
    imageURl: `https://i.etsystatic.com/21859925/r/il/1ee530/2623242698/il_340x270.2623242698_f0jd.jpg`,
    caption: `The Etsy Gift Guide`,
  },
];

const popularGiftsNow = [
  {
    imgURL:`https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg`,
    caption:`Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case `


  }
]

const totalContainer = document.createElement("section");
totalContainer.classList.add("total-card-holder");
shopSelection.appendChild(totalContainer);

function singleCardOfShopSelection(imageUrl, caption) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const text = document.createElement("span");

  totalContainer.appendChild(card);
  card.appendChild(image);
  card.appendChild(text);

  image.src = imageUrl;
  console.log(caption);
  text.innerHTML = caption;
}
for (let key in selectionItems) {
  console.log(selectionItems[key].caption);
  singleCardOfShopSelection(
    selectionItems[key].imageURl,
    selectionItems[key].caption
  );
}

function dealOfTheDay() {
  let topHeading = document.createElement("div");
  let image = document.createElement("img");
  let heading = document.createElement("h2");
  let bottomText = document.createElement("p");
  shopSelection.appendChild(topHeading);
  topHeading.classList.add("heading-top");
  shopSelection.appendChild(bottomText);
  topHeading.appendChild(heading);
  topHeading.appendChild(image);
  heading.innerHTML = "Shop our selections";
  image.src = "/assets/arrow.svg";
  bottomText.innerHTML = "Curated collections hand-picked by Etsy editors";
}
