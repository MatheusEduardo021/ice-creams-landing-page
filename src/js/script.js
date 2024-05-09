ScrollReveal().reveal('.nav-sr', {
    duration: 1500,
    distance: '50px',
    origin: 'top',
});

ScrollReveal().reveal('.main-sr', {
    duration: 1500,
    distance: '150px',
    origin: 'left',
});


ScrollReveal().reveal('.cardapio-sr', {
    duration: 1500,
    distance: '150px',
    origin: 'left',
});

ScrollReveal().reveal('.img-sr', {
    duration: 1500,
    distance: '150px',
    origin: 'left',
});

ScrollReveal().reveal('.testimonials-sr', {
    duration: 1500,
    distance: '150px',
    origin: 'left',
});

const menuBtn = document.querySelector('#mobile-btn').addEventListener('click', menuShow)

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }


}

// "fa-solid fa-x"> ---> X 