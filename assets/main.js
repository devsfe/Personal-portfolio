const menuBtn = document.querySelector('.bars');
var burger = document.querySelector('.bars__burger')
var menuOpen = false;
var body = document.querySelector('body');
var home = document.querySelector('home');
const dataAnime = document.querySelectorAll('[data-anime]');
const animate =  'animate';

//Eventos
menuBtn.addEventListener('click', btnAnimation);
menuBtn.addEventListener('click', menuMobile);
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

//Criando menu mobile
var mobileMenu = document.createElement('div');
    mobileMenu.className = 'menu__mobile';

    body.insertBefore(mobileMenu, home);

    //Criando list para menu mobile
    var menuList = document.createElement('ul');
    menuList.className = 'menu__list';
    mobileMenu.appendChild(menuList);
    var linksArray = ["Home", "Sobre", "Portfólio", "Portfolio", "Contato"];

    for (var i = 0; i < linksArray.length; i++) {
        var menuItem = document.createElement('li');
        menuItem.className = 'menu__item';
        menuList.appendChild(menuItem);

        var menuLink = document.createElement('a');
        menuLink.className = 'menu__link'
        
        menuItem.appendChild(menuLink);
        
        var menuText = document.createTextNode(linksArray[i]);
        menuLink.appendChild(menuText);

        menuLink.addEventListener('click', closeMenu);

        //Fechar menu ao clicar em um link
        function closeMenu() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('open');

            menuOpen = false;
        }
    }

//Colocando link certo em cada "a" tag 
var menuLinks = document.querySelectorAll('.menu__link');

var linksAttr = ["#home", "#services", "#teste3", "#teste4", "#teste5"];

menuLinks.forEach(function(item, i){
    item.setAttribute('href', linksAttr[i]);
});


//Abrir menu mobile
function menuMobile(){
    if(menuOpen == true){
        mobileMenu.classList.add('active');
        mobileMenu.classList.remove('hidden');

    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');

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