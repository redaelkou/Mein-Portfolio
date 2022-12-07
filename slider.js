
// ! ################################################### image slider
let slides = document.querySelectorAll('.slide')
let btns = document.querySelectorAll('.btn')
function munualNav(indx) {
    slides.forEach( (ele) => {
        ele.classList.remove('active')
    })
    btns.forEach( (ele) => {
        ele.classList.remove('active')
    })

    slides[indx].classList.add('active')
    btns[indx].classList.add('active')
}

btns.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
        munualNav(indx)
    })
})

// let count = 0;
// function countt() {
//     setInterval( () => {
//         btns[count].click()
//         count++

//         if (count > btns.length - 1) {
//             count = 0
//         }
//     }, 3000)
// }
// countt()
