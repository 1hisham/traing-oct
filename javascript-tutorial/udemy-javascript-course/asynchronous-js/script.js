'use strict';

// const getCountryData = function (country ) {
//   const btn = document.querySelector('.btn-country');
//   const countriesContainer = document.querySelector('.countries');

//   ///////////////////////////////////////
//   const request = new XMLHttpRequest();
//   request.open('GET',`https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
// <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
// `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('india');
// getCountryData('sri lanka');





// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };
  
//   const imgContainer = document.querySelector('.images');
  
//   const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//       const img = document.createElement('img');
//       img.src = imgPath;
  
//       img.addEventListener('load', function () {
//         imgContainer.append(img);
//         resolve(img);
//       });
  
//       img.addEventListener('error', function () {
//         reject(new Error('Image not found'));
//       });
//     });
//   };
  
//   let currentImg;
  
//   createImage('img/img-1.jpg')
//     .then(img => {
//       currentImg = img;
//       console.log('Image 1 loaded');
//       return wait(2);
//     })
//     .then(() => {
//       currentImg.style.display = 'none';
//       return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//       currentImg = img;
//       console.log('Image 2 loaded');
//       return wait(2);
//     })
//     .then(() => {
//       currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));
  
  




const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 1
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

