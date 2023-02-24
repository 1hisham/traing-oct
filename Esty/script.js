"use strict";
const category = document.querySelector(".category");
const discoverItems = document.querySelector(".image-container");
const dealsCard = document.querySelector(".image-cards");
const shopSelection = document.querySelector(".shop-selection");
const popularGift = document.querySelector(".popular-gift-cards");
const sinlgeCard = document.querySelector(".single-card");
const dropdown = document.querySelectorAll(".main-drop-down");
const hi = document.querySelectorAll(".hi");
const icon = document.querySelectorAll(".icon");
const totalContainer = document.createElement("section");
const inputValue = document.querySelector(".toget-input");
const buttonInput = document.querySelector(".input-button");

function totalCategorylist() {
  function categorylist() {
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
    return categorylist;
  }

  function categorylistItteration() {
    categorylist = categorylist();
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
  }

  categorylistItteration();
}

totalCategorylist();

// second section
function totalDiscoverList() {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/discoverlist.json"
  )
    .then((response) => response.json())
    .then((discoverlist) => {
      function discoverListItteration() {
        for (const key in discoverlist) {
          let input = document.createElement("li");
          discoverItems.appendChild(input);
          input.innerHTML = `<img src="${discoverlist[key].imglink}" alt="">`;
          let imgText = document.createElement("span");
          input.appendChild(imgText);
          imgText.innerHTML = discoverlist[key].caption;
        }
      }
      discoverListItteration();
    });
}
totalDiscoverList();

function totalDealOfDay() {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/imageCardsItems.json"
  )
    .then((response) => response.json())
    .then((imgaeCardsItems) => {
      function deaOfDay() {
        for (const key in imgaeCardsItems) {
          let inputImage = document.createElement("img");
          inputImage.setAttribute("src", `${imgaeCardsItems[key].imglink}`);
          let listcontainer = document.createElement("li");
          let angerTag = document.createElement("a");
          let discountContainer = document.createElement("p");
          let itemName = document.createElement("span");

          discountContainer.innerHTML = imgaeCardsItems[key].discount;
          itemName.innerHTML = imgaeCardsItems[key].caption;

          listcontainer.appendChild(inputImage);
          listcontainer.appendChild(angerTag);
          angerTag.appendChild(discountContainer);
          angerTag.appendChild(itemName);
          dealsCard.appendChild(listcontainer);
        }
      }

      deaOfDay();
    });
}

totalDealOfDay();

function totalPopularGiftsNow() {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json"
  )
    .then((response) => response.json())
    .then((popularGiftsNow) => {
    
     
      
      //  DISCOUNT PRICE

      let sortedArray;
      let priceArray = [];
     
      function calculationDiscount() {
        let discountPrice = 0;
        let price = 0;
        for (let i = 0; i < popularGiftsNow.length; i++) {
          discountPrice =
            popularGiftsNow[i].amount.originalPrice *
            (popularGiftsNow[i].amount.discount / 100);
          console.log(popularGiftsNow[i].amount.originalPrice);
          price = popularGiftsNow[i].amount.originalPrice - discountPrice;
          popularGiftsNow[i].amount.payPrice = price;
          console.log(price);
          priceArray.push(Math.floor(price));
        }

        buttonInput.addEventListener('click',() =>{
          let searchNumber = inputValue.value        
         sortedArray = popularGiftsNow.filter((item,idx) =>{
       
          return searchNumber < item.amount.payPrice
        })
        console.log(sortedArray);

         if(popularGiftsNow !== sortedArray){
         popularGiftsNow = sortedArray
         console.log(popularGiftsNow);
         sinlgeCard.innerHTML = ""
           updatingFunction(popularGiftsNow)
     
        }
      })


        return priceArray;
      }

      calculationDiscount()
  
      // star ratinig

      //
      function starRatingAmount(key) {
        svg = "";

        for (
          let j = 0;
          j < Math.floor(popularGiftsNow[key].rating.stars);
          j++
        ) {
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

      // POPULAR-GIFT
      let heartEmpty = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`;
      let heartFilled = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`;

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
        freeDeliverys
      ) {
        const fullCard = document.createElement("li");
        fullCard.classList.add("full-card");
        sinlgeCard.appendChild(fullCard);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        fullCard.appendChild(imageContainer);
        const image = document.createElement("img");
        imageContainer.appendChild(image);
        image.src = imageUrl;
        const heartBtn = document.createElement("div");
        heartBtn.classList.add("heart-btn");
        imageContainer.appendChild(heartBtn);

        heartBtn.innerHTML = heartEmpty;

        heartBtn.addEventListener("click", () => {
          if (heartBtn.innerHTML === heartEmpty) {
            heartBtn.innerHTML = heartFilled;
          } else {
            heartBtn.innerHTML = heartEmpty;
          }
        });

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
    

      function updatingFunction(newPopular){
     
        
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
          popularGiftsNow[key].freeDelivery
        );
      }

    }
      
      
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
          popularGiftsNow[key].freeDelivery
          );
        }  
      });
    }

totalPopularGiftsNow();

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

function dealOfTheDay() {
  let topHeading = document.createElement("div");
  let image = document.createElement("img");
  let heading = document.createElement("h2");
  let bottomText = document.createElement("p");
}

function totalSelectionItems() {
  totalContainer.classList.add("total-card-holder");
  shopSelection.appendChild(totalContainer);

  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/selectionItems.json"
  )
    .then((response) => response.json())
    .then((selectionItems) => {
      function itterationForSelectionItems() {
        for (let key in selectionItems) {
          singleCardOfShopSelection(
            selectionItems[key].imageURl,
            selectionItems[key].caption
          );
        }
      }
      itterationForSelectionItems();
    });
}
totalSelectionItems();

function footerFaq() {
  dropdown.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      hi[i].classList.toggle("active");
      icon[i].classList.toggle("rotate");
    });
  });
}
footerFaq();
