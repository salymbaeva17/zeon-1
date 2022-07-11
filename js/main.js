const headerMenu = document.querySelector('.header__menu')
const mobileMenu = document.querySelector('.header__mobile-menu')
const headerLinks = document.querySelectorAll('.header__link')
mobileMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('show')
})
headerLinks.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.classList.remove('show')
    })
})