const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const productsCart = document.querySelector('.products-cart');



menuEmail.addEventListener('click', toggleMenu);
burgerMenu.addEventListener('click', toggleBurgerMenu);
menuCart.addEventListener('click', toggleCartAside);

function toggleMenu() {
     desktopMenu.classList.toggle('inactive');
     productsCart.classList.add('inactive');
}
function toggleBurgerMenu(){
     mobileMenu.classList.toggle('inactive');
     productsCart.classList.add('inactive');
     
}

function toggleCartAside(){
     productsCart.classList.toggle('inactive');
     mobileMenu.classList.add('inactive');
     desktopMenu.classList.add('inactive');
     
}