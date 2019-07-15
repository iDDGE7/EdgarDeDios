
var onresize = window.onresize = function () {

    // events JS //

    onload();
    //Menu Mobile//


    menuMobileHide();

    // background-section //

    // zoom();  //detect zoom of screen
    // sizeTitle();  //height-title
    // screenSize();
    // resetTitleMobile();
    hiddenTitleBackgroundMobile();
    // fixedTitle();
    barsSize();
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

var posScroll;
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
