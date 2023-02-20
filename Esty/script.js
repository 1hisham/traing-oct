"use strict";
const category = document.querySelector(".category");
const discoverItems = document.querySelector(".image-container");
const dealsCard = document.querySelector(".image-cards");
const shopSelection = document.querySelector(".shop-selection");
const popularGift = document.querySelector(".popular-gift-cards");
const sinlgeCard = document.querySelector(".single-card");
const dropdown = document.querySelectorAll('.main-drop-down')
const  hi = document.querySelectorAll('.hi')
const icon = document.querySelectorAll('.icon')

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
    imgURL: `https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg`,
    caption: `Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case `,
    videoURL: "",
    rating: { stars: `${1}`, amountOfRating: "9,516" },
    amount: {
      symbol: `₹`,
      originalPrice: `${(1, 713)}`,
      payPrice: 0,
      discount: `${50}`,
    },
    freeDelivery: "",
  },
  {
    imgURL: `https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg`,
    caption: `Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift" `,
    videoURL: "",
    rating: { stars: `${3.5}`, amountOfRating: "13,587" },
    amount: {
      symbol: `₹`,
      originalPrice: `${(3, 603)}`,
      payPrice: 0,
      discount: `${50}`,
    },
    freeDelivery: "",
  },
  {
    imgURL: `https://i.etsystatic.com/25168585/c/2500/1987/0/181/il/214e7e/4589233930/il_340x270.4589233930_dg79.jpg`,
    caption: `Custom Pet Portraits Using Pet Photo Personalized Digital Dog Portraits Cat Portraits Custom Dog Portraits Custom Pet Art Pet Drawing `,
    videoURL: "",
    rating: { stars: `${2.5}`, amountOfRating: "11,134" },
    amount: {
      symbol: `₹`,
      originalPrice: `${(1, 275)}`,
      payPrice: 0,
      discount: `${40}`,
    },
    freeDelivery: "yes",
  },
  {
    imgURL: `https://i.etsystatic.com/28045281/r/il/3f41fa/3897994052/il_340x270.3897994052_l8xd.jpg`,
    caption: `Sun catcher/ Crystal suncatcher/ Crystal Rainbow maker/ Aurora gemstone suncatcher/ crystal prism/ wall hanging/ Home decor/ Gift 4 women `,
    videoURL: "",
    rating: { stars: `${4}`, amountOfRating: "6,866" },
    amount: {
      symbol: `₹`,
      originalPrice: `${(2, 657)}`,
      payPrice: 0,
      discount: `${10}`,
    },
    freeDelivery: "",
  },
  {
    imgURL: `https://i.etsystatic.com/27890741/c/2343/1862/320/560/il/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg`,
    caption: `Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality &amp; DURABLE `,
    videoURL: "",
    rating: { stars: `${4}`, amountOfRating: "12,391" },
    amount: {
      symbol: `₹`,
      originalPrice: `${(1, 455)}`,
      payPrice: 0,
      discount: `${50}`,
    },
    freeDelivery: "yes",
  },
  {
    imgURL: `https://i.etsystatic.com/26694795/c/2445/1943/282/0/il/035b01/3254592822/il_340x270.3254592822_5dss.jpg`,
    caption: `Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men `,
    videoURL: "",
    rating: { stars: `${5}`, amountOfRating: "6,238" },
    amount: {
      symbol: `₹`,
      originalPrice: `${(8, 232)}`,
      payPrice: 0,
      discount: `${70}`,
    },
    freeDelivery: "",
  },
];
//  DISCOUNT PRICE

let discountPrice = 0;
let price = 0;
function calculationDiscount() {
  for (let i = 0; i < popularGiftsNow.length; i++) {
    discountPrice =
      popularGiftsNow[i].amount.originalPrice *
      (popularGiftsNow[i].amount.discount / 100);
    console.log(popularGiftsNow[i].amount.originalPrice);
    price = popularGiftsNow[i].amount.originalPrice - discountPrice;
    popularGiftsNow[i].amount.payPrice = price;
    console.log(popularGiftsNow[i].amount.payPrice);
  }
}
calculationDiscount();
console.log(calculationDiscount)
// POPULAR-GIFT
let heartEmpty = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`
let heartFilled = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`

const headingOnPopularCard = document.createElement("h2");
popularGift.appendChild(headingOnPopularCard);
headingOnPopularCard.innerHTML = "Popular gifts right now";

function popularGiftCardSingle(
  imageUrl,
  imageDescription,
  starRatings,
  totalRatings,
  symbols,
  payPrice,
  prices,
  discounts,
  freeDeliverys,
  
) {
  const fullCard = document.createElement("li");
  fullCard.classList.add("full-card");
  sinlgeCard.appendChild(fullCard);
  
  const imageContainer = document.createElement('div')
  imageContainer.classList.add("image-container")
  fullCard.appendChild(imageContainer)
  const image = document.createElement("img");
  imageContainer.appendChild(image);
  image.src = imageUrl;
  const heartBtn = document.createElement("div");
  heartBtn.classList.add('heart-btn')
  imageContainer.appendChild(heartBtn)
  
  heartBtn.innerHTML = heartEmpty
  
  heartBtn.addEventListener("click",()=>{
    if(heartBtn.innerHTML === heartEmpty){
      heartBtn.innerHTML = heartFilled
    }else{
      heartBtn.innerHTML = heartEmpty
    }
  })

  const bottomContainer = document.createElement("li");
  bottomContainer.classList.add("bottom-container");
  fullCard.appendChild(bottomContainer);

  const imageText = document.createElement("h2");
  bottomContainer.appendChild(imageText);
  imageText.innerHTML = imageDescription;

  const rating = document.createElement("div");
  bottomContainer.appendChild(rating);

  rating.classList.add("rating");
  const starRating = document.createElement("div");
  rating.appendChild(starRating);
  starRating.innerHTML = starRatings;

  const totalRating = document.createElement("span");
  rating.appendChild(totalRating);
  totalRating.innerHTML = `(${totalRatings})`;

  const pricelist = document.createElement("div");
  bottomContainer.classList.add("total-pricelist");
  bottomContainer.appendChild(pricelist);
  pricelist.classList.add("all-prices");

  const price = document.createElement("span");
  pricelist.appendChild(price);
  price.innerHTML = symbols + " " + Math.floor(payPrice) + " ";
  const priceNotdiscount = document.createElement("span");
  pricelist.appendChild(priceNotdiscount);
  priceNotdiscount.innerHTML = symbols + " " + Math.floor(prices);
  const discount = document.createElement("span");
  pricelist.appendChild(discount);
  discount.innerHTML = `(${discounts}% off)`;
  const freeDelivery = document.createElement("span");
  pricelist.appendChild(freeDelivery);
  if (freeDeliverys == "yes") {
    freeDelivery.innerHTML = "FREE delivery";
  } else {
    freeDelivery.classList.add("no-delivery");
  }
}



// popularGiftCardSingle()
let svgHalf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
let svg = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`;

for (let key in popularGiftsNow) {
  popularGiftCardSingle(
    popularGiftsNow[key].imgURL,
    popularGiftsNow[key].caption,
    starRatingAmount([key]),
    popularGiftsNow[key].rating.amountOfRating,
    popularGiftsNow[key].amount.symbol,
    popularGiftsNow[key].amount.payPrice,
    popularGiftsNow[key].amount.originalPrice,
    popularGiftsNow[key].amount.discount,
    popularGiftsNow[key].freeDelivery,
    
  );
}

function starRatingAmount(key) {
  svg = "";

  for (let j = 0; j < Math.floor(popularGiftsNow[key].rating.stars); j++) {
    svg =
      svg +
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="18" height="18"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`;
  }
  if (popularGiftsNow[key].rating.stars % 1 !== 0) {
    svg = svg + svgHalf;
    return svg;
  }

  return svg;
}

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

  text.innerHTML = caption;
}
for (let key in selectionItems) {
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



function footerFaq(){

dropdown.forEach((btn,i) =>{

  btn.addEventListener("click", ()=>{

  hi[i].classList.toggle('active')
  icon[i].classList.toggle('rotate')
  
 
  
  })
})
}
footerFaq()




