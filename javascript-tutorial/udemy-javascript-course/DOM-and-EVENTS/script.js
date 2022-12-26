'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body)

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// const allButton = document.getElementsByTagName('button');
// console.log(allButton)
message.innerHTML =
  'we use cookied for improvied funtionality and analytics. <button class ="btn">Got it!</button>';

header.append(message);

///message.removed();

document
  .querySelector('.btn--closed-cookie')
  addEventListener('click', function () {

    message.parentElement.removeChild(message);
  });


  // styles
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';

  // console.log(message.style.color);

  message.style.height = 
    Number.parseFloat(getComputedStyle(message).height,10) + 30 +'px';

    //Artibutes
    const logo =document.querySelector('.nav__logo');
    console.log(logo.alt);
    console.log(logo.src);
    console.log(logo.className);
    
    //Non-standerd 
    console.log(logo-designer);
    console.log(logo.getAttribute('designer'));
    