const counters = document.querySelectorAll('.counter')


// function counters(){
//     a = counters [c]
//     a.innerText = '5'
//     console.log(counters);
// }
// counter(2)



counters.forEach(counter => {
    counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText =`${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
            
        }else{
            counter.innerText = target
        }
      }

      updateCounter()
})
