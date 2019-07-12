var buttonMenu = document.getElementById('buttonMenu');
var menuMobile = document.getElementById('menu-mobile');
var statusMenu = 0;

buttonMenu.addEventListener('click', function () {
    if (statusMenu == 0) {
        statusMenu = 1;
        menuMobile.style.left = "0";
    } else {
        statusMenu = 0;
        menuMobile.style.left = "-100%";
    }
});

window.onresize = function () {
    if (screen.width > 580) {
        statusMenu = 0;
        menuMobile.style.left = "-100%";
    }
}