const menuBtn = document.querySelector('.bars');
const navbar = document.querySelector('.nav');
var burger = document.querySelector('.bars__burger')
var menuOpen = false;
var navList = document.querySelector('.nav__list');
var body = document.querySelector('body');
var container = document.querySelector('.container');
var logo = document.querySelector('.nav__logo');

//Eventos
window.addEventListener('scroll', stickyNav);
menuBtn.addEventListener('click', btnAnimation);


//Sticky nav
function stickyNav() {
    navbar.classList.toggle('sticky', window.scrollY > 10);
    if(window.scrollY > 10) {
        navLogo.style.color = '#292929';
        menuMobile.style.color = '#292929';

        for(var i = 0; i < navLink.length; i++) {
            navLink[i].style.color = '#292929';
        }
    } else {
        navLogo.style.color = '';
        menuMobile.style.color = '';
        for(var i = 0; i < navLink.length; i++) {
            navLink[i].style.color = '';
        }
    }
};



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