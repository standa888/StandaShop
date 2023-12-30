let addToCartBlockation = 0;

function mobileMenu() {
    let menuPc = document.querySelector(".menu-bar");
    menuPc.style = "display: block; position: absolute; left: 50%; transform: translate(-50%); margin: 15px 0px 0px 0px; z-index: 1;";
}

function addToCart() {
    let cartNumber = document.querySelector(".iteam-number");

    let cartIteamNumber = cartNumber.innerText;
    cartIteamNumber = Number(cartIteamNumber);
    cartIteamNumber = cartIteamNumber + 1;
    cartNumber.innerText = cartIteamNumber;

    if (addToCartBlockation === 0) {
        cartNumber.style = "display: block;";
        addToCartBlockation +=  + 1;
    }
}
