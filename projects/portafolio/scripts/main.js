var backgroundHeader = document.getElementById('background-header');
var header = document.getElementById('header');

const headerScroll = function () {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollPosition > window.innerHeight / 3) {
        backgroundHeader.style.transform = "translateY(0%)";
        header.style.top = "0%";
    } else {
        backgroundHeader.style.transform = "translateY(-100%)";
        header.style.top = "12%";
    }
}




window.onscroll = function () {
    headerScroll();
}

window.onload = () => {
    headerScroll();
}