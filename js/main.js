const headerMenu = document.querySelector('.header__menu')
const mobileMenu = document.querySelector('.header__mobile-menu')
const headerLinks = document.querySelectorAll('.header__link')
const burgerSvg = document.querySelector('.header__mobile-menu svg path')

mobileMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('show')
    burgerSvg.style.fill = burgerSvg.style.fill === 'white' ? 'black' : 'white'
})
headerLinks.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.classList.remove('show')
        burgerSvg.style.fill = burgerSvg.style.fill === 'white' ? 'black' : 'white'
    })
})