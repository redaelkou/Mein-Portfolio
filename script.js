// document.querySelector('p').onclick = () => {
//     document.body.classList.toggle('dark-theme');

//     if (document.body.classList.contains('dark-theme')) {
//         localStorage.setItem('dark-theme', 'on');
//     }else {
//         localStorage.removeItem('dark-theme');
//     }
// }

// if (localStorage.getItem('dark-theme')) {
//     document.body.classList.add('dark-theme');
// }else {
//     document.body.classList.remove('dark-theme');
// }

const wrapper = document.querySelector('.wrapper');
window.addEventListener('DOMContentLoaded', () => {
    wrapper.classList.add('DOMContent-loaded')
});

let line = document.querySelector('.line');
window.addEventListener('DOMContentLoaded', () => {
    line.classList.add('line-transition');
});



