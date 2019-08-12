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


    // load animation //

    var contenedor = document.getElementById('onload-chargin');
    var cirlce1 = document.getElementById('cirlce1');
    var cirlce2 = document.getElementById('cirlce2');
    var cirlce3 = document.getElementById('cirlce3');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';

    setTimeout(function () {
        cirlce1.style.animationName = "initial";
        cirlce2.style.animationName = "initial";
        cirlce3.style.animationName = "initial";
    }, 5000);


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
    // scroollingFooter();

    var hexa = document.getElementsByClassName('hexa');
    if (posScroll < window.innerHeight) {
        for (var i = 0; i < hexa.length; i++) {
            hexa[i].style.animationName = "animateHex";
        }
    } else {
        for (var i = 0; i < hexa.length; i++) {
            hexa[i].style.animationName = "initial";
        }
    }
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

var polygonEdit = document.getElementById("polygonEdit");
var photoPerfil = document.getElementById("photoPerfil");

photoPerfil.addEventListener("mouseenter", function () {
    polygonEdit.style.transform = "scale(1.1)";
});
photoPerfil.addEventListener("mouseout", function () {
    polygonEdit.style.transform = "scale(1.0)";
});

var dpiInit = window.devicePixelRatio;
var containerAll = document.getElementById('containerAll');
var courtineBackground = document.getElementById('courtineBackground');
var contenttitle = document.getElementById('contenttitle');
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
    } else {
        contenttitle.style.height = window.innerHeight + "px";
    }
}

function screenSize() {
    if (screen.width > 750) {
        backgroundCourtineMove();
    } else {
        courtineBackground.style.width = "100%";
    }
}

var scrollEndIntoBackground = containerAll.offsetTop + courtineBackground.offsetHeight - screen.height * 0.4;
var scrollInitIntoBackground = courtineBackground.scrollTop + screen.height * 0.70;

function backgroundCourtineMove() {
    if (posScroll > scrollInitIntoBackground && posScroll < scrollEndIntoBackground) {
        courtineBackground.style.width = "50%";
    } else {
        courtineBackground.style.width = "100%";
    }
}

function resetTitleMobile() {
    if (screen.width < 750) {
        contenttitle.style.position = "relative";
        contenttitle.style.height = "750px";
        contenttitle.style.width = "100%";
        contenttitle.style.background = "red";
    }
}

function fixedTitle() {
    if (posScroll > window.innerHeight && posScroll < window.innerHeight + courtineBackground.offsetHeight - contenttitle.offsetHeight) {
        contenttitle.style.position = "fixed";
        contenttitle.style.width = "50%";
        contenttitle.style.top = "0%";
    }
    else if (posScroll >= 0 && posScroll <= window.innerHeight) {
        contenttitle.style.position = "absolute";
        contenttitle.style.width = "100%";
        contenttitle.style.top = "0%";
    }
    else if (posScroll > window.innerHeight + courtineBackground.offsetHeight - contenttitle.offsetHeight) {
        contenttitle.style.position = "absolute";
        contenttitle.style.width = "100%";
        contenttitle.style.top = "initial";
        contenttitle.style.bottom = "0";
    }

    contenttitle.style.right = "0%";
    courtineBackground.style.right = "0%";
}

function hiddenTitleBackgroundMobile() {
    if (screen.width < 750 || window.innerWidth < 750) {
        if (posScroll > window.innerHeight - window.innerHeight * 0.2 && posScroll < window.innerHeight + courtineBackground.offsetHeight - courtineBackground.offsetHeight * 0.3) {
            courtineBackground.style.right = "-100%";
        }
        else if (posScroll >= 0 && posScroll <= window.innerHeight) {
            courtineBackground.style.right = "0%";
            contenttitle.style.top = "0%";
        }
        else if (posScroll > window.innerHeight + courtineBackground.offsetHeight - courtineBackground.offsetHeight * 0.3) {
            courtineBackground.style.right = "0%";
        }

        if (posScroll < (window.innerHeight + courtineBackground.offsetHeight / 2)) {
            contenttitle.style.top = "0";
            contenttitle.style.bottom = "initial";
        }

        if (posScroll > (window.innerHeight + courtineBackground.offsetHeight / 2)) {
            contenttitle.style.bottom = "0";
            contenttitle.style.top = "initial";
        }

        contenttitle.style.position = "absolute";
        contenttitle.style.width = "100%";
        courtineBackground.style.width = "100%";
        contenttitle.style.height = window.innerHeight + "px";

    } else {
        if (dpi < 50) {
            contenttitle.style.height = "100%";
        } else {
            contenttitle.style.height = window.innerHeight + "px";
        }

        if (posScroll > scrollInitIntoBackground && posScroll < scrollEndIntoBackground - 300) {
            courtineBackground.style.left = "initial";
            courtineBackground.style.width = "50%";
        } else {
            courtineBackground.style.width = "100%";
        }
        courtineBackground.style.right = "0%";
        contenttitle.style.width = "100%";
        fixedTitle();

    }
}

var barJS = document.getElementById("bar1Web");
var barPHP = document.getElementById("bar2Web");
var barHTML = document.getElementById("bar3Web");
var barSCSS = document.getElementById("bar4Web");
var barCSS = document.getElementById("bar5Web");

var barJAVA = document.getElementById("bar1programing");
var barCSHARP = document.getElementById("bar2programing");
var barANDROID = document.getElementById("bar3programing");

var barSQL = document.getElementById("bar1db");
var barMYSQL = document.getElementById("bar2db");

var barPS = document.getElementById("bar1designer");
var barFIGMA = document.getElementById("bar2designer");
var barILUSTRATOR = document.getElementById("bar3designer");
var barCOREL = document.getElementById("bar4designer");

var containerG1 = document.getElementById("containerG1");
var containerG2 = document.getElementById("containerG2");
var containerG3 = document.getElementById("containerG3");
var containerG4 = document.getElementById("containerG4");

function increaseBarsWEB() {
    barJS.style.width = "45%";
    barPHP.style.width = "30%";
    barHTML.style.width = "50%";
    barSCSS.style.width = "60%";
    barCSS.style.width = "60%";
}
function increaseBarsPROGRA() {
    barJAVA.style.width = "45%";
    barCSHARP.style.width = "35%";
    barANDROID.style.width = "25%";
}
function increaseBarsDB() {
    barSQL.style.width = "30%";
    barMYSQL.style.width = "30%";
}
function increaseBarsDESIG() {
    barPS.style.width = "60%";
    barFIGMA.style.width = "50%";
    barILUSTRATOR.style.width = "50%";
    barCOREL.style.width = "70%";
}

function decreaseBarsWEB(percent) {
    barJS.style.width = percent;
    barPHP.style.width = percent;
    barHTML.style.width = percent;
    barSCSS.style.width = percent;
    barCSS.style.width = percent;
}

function decreaseBarsPROGRA(percent) {
    barJAVA.style.width = percent;
    barCSHARP.style.width = percent;
    barANDROID.style.width = percent;
}
function decreaseBarsDB(percent) {
    barSQL.style.width = percent;
    barMYSQL.style.width = percent;
}
function decreaseBarsDESIG(percent) {
    barPS.style.width = percent;
    barFIGMA.style.width = percent;
    barILUSTRATOR.style.width = percent;
    barCOREL.style.width = percent;
}

function barsSize() {
    if (screen.width < 750 || window.innerWidth < 750) {
        if (posScroll > window.innerHeight - window.innerHeight * 0.2 && posScroll < window.innerHeight + containerG1.offsetHeight - 200) {
            increaseBarsWEB();
        } else {
            var percent = "12%";
            decreaseBarsWEB(percent);
        }

        if (posScroll > window.innerHeight + containerG1.offsetHeight - screen.height * 0.5 && posScroll < window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight - 200) {
            increaseBarsPROGRA();
        } else {
            var percent = "12%";
            decreaseBarsPROGRA(percent);
        }

        if (posScroll > window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight - screen.height * 0.5 && posScroll <
            window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight + containerG3.offsetHeight - 200) {
            increaseBarsDB();
        } else {
            var percent = "12%";
            decreaseBarsDB(percent);
        }
        if (posScroll > window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight + containerG3.offsetHeight - screen.height * 0.6 && posScroll <
            window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight + containerG3.offsetHeight + containerG4.offsetHeight - 400) {
            increaseBarsDESIG();
        } else {
            var percent = "12%";
            decreaseBarsDESIG(percent);
        }
    } else {

        if (posScroll > scrollInitIntoBackground && posScroll < window.innerHeight + containerG1.offsetHeight - 200) {
            increaseBarsWEB();
        } else {
            var percent = "15%";
            decreaseBarsWEB(percent);
        }

        if (posScroll > window.innerHeight + containerG1.offsetHeight - screen.height * 0.5 && posScroll < window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight - 200) {
            increaseBarsPROGRA();
        } else {
            var percent = "15%";
            decreaseBarsPROGRA(percent);
        }

        if (posScroll > window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight - screen.height * 0.5 && posScroll <
            window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight + containerG3.offsetHeight - 200) {
            increaseBarsDB();
        } else {
            var percent = "15%";
            decreaseBarsDB(percent);
        }
        if (posScroll > window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight + containerG3.offsetHeight - screen.height * 0.6 && posScroll <
            window.innerHeight + containerG1.offsetHeight + containerG2.offsetHeight + containerG3.offsetHeight + containerG4.offsetHeight - 400) {
            increaseBarsDESIG();
        } else {
            var percent = "15%";
            decreaseBarsDESIG(percent);
        }
    }


}

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

function menuMobileHide() {
    if (screen.width > 580) {
        statusMenu = 0;
        menuMobile.style.left = "-100%";
    }
}