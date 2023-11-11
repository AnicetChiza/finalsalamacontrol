const scroll = document.querySelector('.top');
scroll.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})