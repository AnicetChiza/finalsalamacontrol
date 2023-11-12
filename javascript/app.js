//Cette partie concerne le header de nos differentes pages
const menu = document.querySelector('.menu-icons');
const exit = document.querySelector('.menu-container');

menu.addEventListener('click', () =>{
    menu.classList.toggle('menu-mobile');
    exit.classList.toggle('menu-mobile');
})

document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () =>{
    menu.classList.remove('menu-mobile');
    exit.classList.remove('menu-mobile');
}))

//Cette partie concerne le bouton top dans la page d'accueil qui doit envoyer les users au debut de la page
const scroll = document.querySelector('.top');
scroll.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})