const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const orderCart = document.querySelector('.order-cart');
const productsCardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const closeCart= document.querySelector('.close-cart');




menuEmail.addEventListener('click', toggleMenu);
burgerMenu.addEventListener('click', toggleBurgerMenu);
menuCart.addEventListener('click', toggleCartAside);
productDetailClose.addEventListener('click', closeProductDetail);
closeCart.addEventListener('click', closeShopingCart);

function toggleMenu() {
     desktopMenu.classList.toggle('inactive');
     orderCart.classList.add('inactive');
     productDetail.classList.add('inactive');
}

function toggleBurgerMenu(){
     mobileMenu.classList.toggle('inactive');
     orderCart.classList.add('inactive');
     productDetail.classList.add('inactive');
     
}

function toggleCartAside(){
     orderCart.classList.toggle('inactive');
     mobileMenu.classList.add('inactive');
     desktopMenu.classList.add('inactive');
     productDetail.classList.add('inactive');
}

function openProductDetail() {
     productDetail.classList.remove('inactive');
     desktopMenu.classList.add('inactive');
     orderCart.classList.add('inactive');
     mobileMenu.classList.add('inactive');
}

function closeProductDetail(){
     productDetail.classList.add('inactive');
}

function closeShopingCart() {
     orderCart.classList.add('inactive');
}


const productList = [];

productList.push({
     name : 'Bike',
     price: 50,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
     name : 'Sunglasses',
     price: 600,
     image:'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
});

productList.push({
     name : 'TV',
     price: 100,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
     name : 'Sunglasses',
     price: 600,
     image:'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
});

productList.push({
     name : 'Bike',
     price: 50,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


for (product of productList ) { 

     const productCard = document.createElement('div');
     productCard.classList.add('product-card');

     const productImg = document.createElement('img');
     productImg.setAttribute('src', product.image);
     productImg.addEventListener('click', openProductDetail);

     const productInfo = document.createElement('div');
     productInfo.classList.add('product-info');

     const productInfoDiv = document.createElement('div');

     const productPrice = document.createElement('p');
     productPrice.innerText = '$' + product.price ; 

     const productName = document.createElement('p');
     productName.innerText = product.name; 

     const productInfoFigure = document.createElement('figure');
    
     const ProductIconCart = document.createElement('img');
     ProductIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

     productInfoFigure.append(ProductIconCart);
     productInfoDiv.append(productPrice, productName);
     productInfo.append(productInfoDiv, productInfoFigure);
     productCard.append(productImg, productInfo);

     productsCardsContainer.append(productCard);

}   





// {/* <div class="product-card">
//      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//      <div class="product-info">
//           <div>
//                <p>$120,00</p>
//                <p>Bike</p>
//           </div>
//           <figure>
//                <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//      </div>
// </div> */}