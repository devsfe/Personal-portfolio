const menuBtn = document.querySelector('.bars');
const navbar = document.querySelector('.nav');
var burger = document.querySelector('.bars__burger')
var menuOpen = false;
var body = document.querySelector('body');
const dataAnime = document.querySelectorAll('[data-anime]');
const animate =  'animate';

//Eventos
menuBtn.addEventListener('click', btnAnimation);
if(dataAnime.length) {
    window.addEventListener('scroll', animeScroll);
    console.log('teste');
}


//Animação menu bars
function btnAnimation(){
    if (menuOpen == false) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
};

//Animate on scroll
function animeScroll() {
    const topoDoSite = window.pageYOffset + ((window.innerHeight * 3) / 4);
    dataAnime.forEach(function(e){
        if((topoDoSite) > e.offsetTop) {
            e.classList.add(animate);
        } else {
            e.classList.remove(animate);
        }
    });
}


animeScroll();