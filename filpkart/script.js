const totalPhoneCards = document.querySelector(".total-card-class");

(function () {
  fetch(
    "https://raw.githubusercontent.com/1hisham/traing-oct/main/sever-fipkart/totalAll.json"
  )
    .then((response) => response.json())
    .then((data) => {
      allCardsOfAllPhones(data);
      setupFilter(data);
    });
})();

function payPriceCalculation(item) {
  let discountPrice = 0;
  let payPrice = 0;
  discountPrice = item.price.price * Number(item.price.discount / 100);
  payPrice = item.price.price - Number(discountPrice);
  return payPrice;
}
function allCardsOfAllPhones(items) {
  let totalCard = "";
  let cardHtml = "";
  items.forEach((item) => {
    let total = "";
    item.phoneDetails.forEach((list) => {
      let html = "";
      html = ` <li>${list}</li>`;
      total += html;
    });

    cardHtml = `   <div class="total-details-container">
        <section class="sub-container-one">
        <div class="image-container">
            <img loading="eager" class="_396cs4" alt="Apple iPhone SE (White, 256 GB) (Includes EarPods, Power Adapter)" src=${
              item.phoneImage
            }>
        
        <div class="heart-svg-image">
            <svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="lightgray" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
        </div>
        </div>
        <form>                                
        <input type="checkbox" id="compare">
        <label for="compare">Add To Compare</label>
        </form>
        </section>
        <section class="one-and-two">
        <section class="sub-container-two">
        <div class="model-name">
            <span>${item.phoneDiscription}</span>
        </div>
        <div class="model-rating-section">
            <div class="rating-star">
                <span>${item.rating.starRating}</span>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" class="_1wB99o">
            </div>
            <span class="total-rating"${item.totalRating} Rating $ ${
      item.reviews
    }Reviews</span>
        </div>
        <ul class="model-features">
            ${total}
        </ul>
       
        </section>
        <section class="sub-containter-three">
        <div class="price-details">
            <div class="cost-and-discount">
                <div class="pay-price">₹${payPriceCalculation(item)}</div>
               <img  class="assured" height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png">
                <div class="total-cost"><div class="cost">₹ ${
                  item.price.price
                }</div><span class="discount">${
      item.price.discount
    }%0ff</span></div>
                <div class="delivery">Free delivery</div>
            </div>
            <div class="exchange-price">upto ₹${
              item.price.exchangePrice
            } off on Exchange</div>
            <div class="bank">Bank offer</div>
        </div>
        </section>
        </section>
        </div>  
        `;

    totalCard += cardHtml;
  });

  totalPhoneCards.innerHTML = totalCard;
}

function applyFilter(data) {
  let brandFilters = [];
  let ratingFilters = [];
  let priceFilter = [];

  const brand1 = document.querySelector(".apple");
  const brand2 = document.querySelector(".samsung");
  const brand3 = document.querySelector(".realme");

  if (brand1.checked === true) {
    brandFilters.push("Apple");
  }

  if (brand2.checked === true) {
    brandFilters.push("Samsung");
  }

  if (brand3.checked === true) {
    brandFilters.push("realme");
  }

  const rate1 = document.querySelector(".four-above");
  const rate2 = document.querySelector(".three-above");

  if (rate1.checked === true) {
    ratingFilters.push(4);
  }
  if (rate2.checked === true) {
    ratingFilters.push(3);
  }

  if (brandFilters.length) {
    data = brandFilter(data, brandFilters);
    console.log(data);
    
  }
  
  if (ratingFilters.length) {
    data = ratingFilter(data, ratingFilters);
    console.log(data,"rating");
    
  }
  
  allCardsOfAllPhones(data);
}

function setupFilter(data) {
  const brand1 = document.querySelector(".apple");
  const brand2 = document.querySelector(".samsung");
  const brand3 = document.querySelector(".realme");
  
  brand1.addEventListener("change", () => {
    applyFilter(data);
  });
  brand2.addEventListener("change", () => {
    applyFilter(data);
  });
  brand3.addEventListener("change", () => {
    applyFilter(data);
  });

  const rate1 = document.querySelector(".four-above");
  const rate2 = document.querySelector(".three-above");

  rate1.addEventListener("change", () => {
    applyFilter(data);
  });
  rate2.addEventListener("change", () => {
    applyFilter(data);
  });
  // price filter
  const minRange = document.querySelector(".min-price");
  const maxRange = document.querySelector(".max-price");

  minRange.addEventListener("change", () => {
    applyFilter(data);
  });

  maxRange.addEventListener("change", () => {
    applyFilter(data);
  });
}

function removeElementFromArray(list, value) {
  idx = list.findIndex((val) => {
    return val === value;
  });

  if (idx === -1) return;

  return list.splice(idx, 1);
}

function brandFilter(data, brands) {
  console.log();
  return data.filter((item) => {
    return brands.includes(item.brandName);
  });
}

function ratingFilter(data, ratings) {
  return data.filter((item) => {
    let match = false;
    for (let i = 0; i < ratings.length; i++) {
      if (item.rating.starRating >= ratings[i]) {
        match = true;
        break;
      }
    }
    return match;
  });
}
