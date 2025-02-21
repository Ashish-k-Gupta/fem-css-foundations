const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close')
const body = document.querySelector('.body')

menu.addEventListener('click', () => {
    nav.classList.add('nav--visible'),
    menu.classList.add('menu--hidden'),
    closeMenu.classList.add('close--show')
    body.classList.add('body--no-scroll')
    
}),
closeMenu.addEventListener('click', () =>{
    nav.classList.remove('nav--visible'),
    menu.classList.remove('menu--hidden'),
    closeMenu.classList.remove('close--show')
    body.classList.remove('body--no-scroll')
})