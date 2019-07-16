
var onresize = window.onresize = function () {

    // events JS //

    onload();
    //Menu Mobile//


    menuMobileHide();

    // background-section //

    // hiddenTitleBackgroundMobile();
}

var onload = window.onload = function () {
    // events JS //

    scrollWindow();

    // background-section //

    // zoom();
    // sizeTitle();
    // screenSize();

    hiddenTitleBackgroundMobile();
    barsSize();
}

// var posScroll;
var scrollWindow = window.onscroll = function () {
    posScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // header-nabvar //

    headerScroll();
    zoom();
    // background-section //

    // screenSize();
    hiddenTitleBackgroundMobile();

    barsSize();
}


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