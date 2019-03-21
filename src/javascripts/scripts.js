// Load jQuery from NPM
// import $ from "jquery";
// window.jQuery = $;
// window.$ = $;

import Glide from "@glidejs/glide";
//import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm";

const myElement = document.querySelector('.glide');
if (myElement) {
    new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        perView: 1,
        gap: 20
        //focusAt: "center"
    }).mount();
}



// Add your scripts here
var fuge = function nothing(params) {
    var i = 1;
    if (true) {
        i++;
    } else {
        return i;
    }
};
