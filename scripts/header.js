var header = document.getElementById('header');
var headerBackground = document.getElementById('header-background');
var menuMobile = document.getElementById('menu-mobile');

function headerScroll() {
    if (posScroll > 150) {
        header.style.top = "5px";
        headerBackground.style.top = "0%";
        menuMobile.style.top = "80px";
    } else {
        header.style.top = "12%";
        headerBackground.style.top = "-100%";
        menuMobile.style.top = "25%";
    }
}