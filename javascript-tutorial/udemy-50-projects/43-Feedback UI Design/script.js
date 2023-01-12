const rating = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sentBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }else if(
        e.target.parentNode.classList.contains('rating') &&
         e.target.previousElementSibling &&
         e.target.previousElementSibling.nodeName ==='IMG'
    ){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
        
    }

})

sentBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class= "fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback:  ${selectedRating}<//strong>
    <p>we'll use your feedback to impeove our customer support</p>
    
    `
})

function removeActive() {
    for(let i = 0; i < rating.length; i++){
        rating[i].classList.remove('active')
    }
}