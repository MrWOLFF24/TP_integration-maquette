(function () {
    "use strict";
    // global variables
    var elem, fade;

    function slideRight() {
        window.addEventListener("scroll", function () {
            if((scrollY >= 330) && (scrollY <= 400)){
                elem.style.animation = "3s theRoad 0s forwards";
            }
        });
    }

    function fadeIn() {
        window.addEventListener("scroll", function () {
            if((scrollY >= 1000) && (scrollY <= 1350)){
                fade.style.animation = "fadeIn 3s forwards";
            }
        });
    }

    window.onload = function () {
    elem = document.getElementById("the_road");
    fade = document.getElementById("participation");
    slideRight();
    fadeIn();
    }

}());