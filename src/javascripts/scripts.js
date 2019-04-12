// Load jQuery from NPM
// import $ from "jquery";
// window.jQuery = $;
// window.$ = $;



// Add your scripts here

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
//window.PhotoSwipe = PhotoSwipe;
//window.PhotoSwipeUI_Default = PhotoSwipeUI_Default;

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


