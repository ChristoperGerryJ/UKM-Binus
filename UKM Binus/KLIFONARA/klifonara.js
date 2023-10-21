const wrapperEl = document.querySelector('.wrapper');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        wrapperEl.classList.add('wrapper-scrolled')
    } else if(window.scrollY <= 50) {
        wrapperEl.classList.remove('wrapper-scrolled');
    }
})
