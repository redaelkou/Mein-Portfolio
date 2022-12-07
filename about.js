let my_skills = document.querySelector('.my-skills');
let levels = document.querySelectorAll('.skill span');

window.addEventListener('scroll', (e) => {
    if (window.scrollY  > my_skills.offsetTop - 200) {
        levels.forEach((level) => {
            level.style.width = level.dataset.level;
        })
    }else {
        levels.forEach((level) => {
            level.style.width = '0';
        })
    }
})