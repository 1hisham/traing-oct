const down = document.querySelectorAll('.fa-chevron-down')
const cross = document.querySelector('.fa-times')
const answer = document.querySelector('.answer')
const faq  = document.querySelectorAll('.faq')
const button = document.querySelectorAll('.faq-toggle')

// button.forEach((xd) =>{
//     xd.addEventListener('click',() => {
//         console.log('click');
        
//     answer.classList.toggle("active")
    

    
    // answer.forEach((ad) =>{
    // ad.classList.toggle('active')
    // cross.classList.toggle('hii')
    // down.classList.('hii')

// })
// })
// }) 
// faq.forEach((no) =>{
//     no.addEventListener('click',() =>{
//         console.log(no);

//     // answer.forEach((ad) =>{
//     answer.classList.toggle('active')
        
//     })
// })
// })

// down.addEventListener('click',() => {
//         console.log("click");
//         answer.classList.toggle('active')
// })

button.forEach((btn) => {
    btn.addEventListener('click', () =>{
        btn.parentNode.classList.toggle('active')

    })
})
