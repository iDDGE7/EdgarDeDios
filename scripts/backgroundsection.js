var dpiInit = window.devicePixelRatio;
var containerAll = document.getElementById('containerAll');
var courtineBackground = document.getElementById('courtineBackground');
var contenttitle = document.getElementById('contenttitle');
// var heightCourtine = courtineBackground.offsetHeight;
// var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
var dpi;

function zoom() {
    var dpiNew = window.devicePixelRatio;
    if (dpiInit != dpiNew) {
        dpiInit = dpiNew;
        dpi = Math.round(window.devicePixelRatio * 100);
    }
}

function sizeTitle() {
    if (dpi < 50) {
        contenttitle.style.height = "100%"
        console.log('100porciento');
    } else {
        contenttitle.style.height = window.innerHeight + "px";
        console.log('screen');
    }
}

function screenSize() {
    if (screen.width > 750) {
        backgroundCourtineMove();
        // sizeTitle();
    } else {
        courtineBackground.style.width = "100%";
    }
}




var scrollInitIntoBackground = courtineBackground.scrollTop + screen.height * 0.70;
// var scrollInitIntoBackground = window.innerHeight;
// var scrollEndIntoBackground = containerAll.scrollTop + containerAll.offsetHeight + contenttitle.offsetHeight - screen.height * 0.5;
var scrollEndIntoBackground = containerAll.offsetTop + courtineBackground.offsetHeight - screen.height * 0.4;

function backgroundCourtineMove() {
    
    if (posScroll > scrollInitIntoBackground && posScroll < scrollEndIntoBackground) {
        courtineBackground.style.width = "50%";
        
        console.log("s");
    } else {
        courtineBackground.style.width = "100%";
    }
    console.log("pos actual: " + posScroll);
    console.log("pos final: " + scrollEndIntoBackground);
    fixedTitle();
}

function resetTitleMobile(){
    if(screen.width < 750){
        contenttitle.style.position = "relative";
        contenttitle.style.height = "750px";
        contenttitle.style.width = "100%";
    }
}

function fixedTitle() {
    if (posScroll > window.innerHeight && posScroll < window.innerHeight + courtineBackground.offsetHeight - contenttitle.offsetHeight) {
        contenttitle.style.position = "fixed";
        // contenttitle.style.transition = "initial";
        contenttitle.style.width = "50%";
        contenttitle.style.top = "0%";
        contenttitle.style.right = "0";
    } 
    else if (posScroll >= 0 && posScroll <= window.innerHeight) {
        contenttitle.style.position = "absolute";
        // contenttitle.style.transition = "all 0.1s";
        contenttitle.style.width = "100%";
        contenttitle.style.top = "0%";
        contenttitle.style.right = "0";
    } 
    else if (posScroll > window.innerHeight + courtineBackground.offsetHeight - contenttitle.offsetHeight) {
        contenttitle.style.position = "absolute";
        contenttitle.style.width = "100%";
        contenttitle.style.top = "initial";
        contenttitle.style.right = "0";
        contenttitle.style.bottom = "0";
    }
}


// function fixedTitle() {
//     if (posScroll > window.innerHeight && posScroll < window.innerHeight + courtineBackground.offsetHeight - contenttitle.offsetHeight) {
//         contenttitle.style.position = "fixed";
//         contenttitle.style.width = "50%";
//         contenttitle.style.top = "0%";
//     } else if (posScroll >= 0 && posScroll <= window.innerHeight) {
//         contenttitle.style.position = "absolute";
//         contenttitle.style.width = "100%";
//         contenttitle.style.top = "0%";
//     } else if (posScroll > window.innerHeight + courtineBackground.offsetHeight - contenttitle.offsetHeight) {
//         contenttitle.style.position = "absolute";
//         contenttitle.style.width = "100%";
//         contenttitle.style.top = "initial";
//         contenttitle.style.bottom = "0";
//     }
// }
