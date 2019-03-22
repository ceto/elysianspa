// Load jQuery from NPM
// import $ from "jquery";
// window.jQuery = $;
// window.$ = $;

import Glide from "@glidejs/glide";
//import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm";

const myElement = document.querySelector(".glide");
if (myElement) {
    new Glide(".glide", {
        type: "carousel",
        startAt: 1,
        perView: 1,
        gap: 60
        //focusAt: "center"
    }).mount();
}

document.querySelector(".menubutton").addEventListener("click", function() {
    document.querySelector(".mobilepanel").classList.toggle("is-active");
    document.querySelector("body").classList.toggle("mobilepanel-is-active");
});

document.querySelector(".mobilepanelclose").addEventListener("click", function() {
    document.querySelector(".mobilepanel").classList.remove("is-active");
    document.querySelector("body").classList.remove("mobilepanel-is-active");
});

// Add your scripts here
var fuge = function nothing(params) {
    var i = 1;
    if (true) {
        i++;
    } else {
        return i;
    }
};
