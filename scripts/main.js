
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
    scroollingFooter();
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



var footer = document.getElementById('footer');
var abooutMeID = document.getElementById('abooutMeID');

function scroollingFooter() {
    if (posScroll > abooutMeID.offsetTop + abooutMeID.offsetHeight) {
        // footer.style.transform = "translateY(0%)";
        footer.style.opacity = "1";
    } else {
        // footer.style.transform = "translateY(100%)";
        footer.style.opacity = "0";
    }
}


var polygonEdit = document.getElementById("polygonEdit");
var photoPerfil = document.getElementById("photoPerfil");

photoPerfil.addEventListener("mouseenter", function () {
    polygonEdit.style.transform = "scale(1.1)";
});
photoPerfil.addEventListener("mouseout", function () {
    polygonEdit.style.transform = "scale(1.0)";
});
