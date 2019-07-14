
var onresize = window.onresize = function () {
    //Menu Mobile//

    menuMobileHide();

    // background-section //

    zoom();  //detect zoom of screen
    sizeTitle();  //height-title
    screenSize();
    resetTitleMobile();

}

var onload = window.onload = function () {

    // background-section //

    zoom();
    sizeTitle();
    screenSize();
    scrollWindow();
}

var posScroll;
var scrollWindow = window.onscroll = function () {
    posScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // header-nabvar //

    headerScroll();

    // background-section //

    screenSize();
    
}
