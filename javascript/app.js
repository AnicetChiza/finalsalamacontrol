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

//Cette partie concerne le dossier bureau central a la page Dashboard
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const maxCounts = [304, 132, 172];
    const intervals = [];

    function updateCounter(index, maxCount) {
        return function () {
            const currentValue = parseInt(counters[index].textContent);
            if (currentValue < maxCount) {
                counters[index].textContent = currentValue + 1;
            } else {
                clearInterval(intervals[index]);
            }
        };
    }

    counters.forEach((counter, index) => {
        intervals[index] = setInterval(updateCounter(index, maxCounts[index]), 10);
    });
});

//Cette partie concerne le bouton top dans la page d'accueil qui doit envoyer les users au debut de la page
const scroll = document.querySelector('.top');
scroll.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})