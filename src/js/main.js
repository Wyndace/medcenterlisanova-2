// === JS for index.html =========================================================================================================================================

import sum from "./components/ex.js"
import { tapAnimation } from "./functions/_animation.js";

console.log(sum(2, 10))


// ==== Button Tap animation ======================================================================================================================================

document.addEventListener('click', (e) => {
    if (e.target.closest(".btn")) {
        tapAnimation(e.target.closest(".btn"));
    }
    if (e.target.closest(".submenu") && window.matchMedia("(min-width: 767px)").matches) {
        if (document.querySelector("[data-previous]") && e.target.closest(".submenu") !== document.querySelector("[data-previous]")) {
            document.querySelector("[data-previous]").querySelector(".submenu__list").classList.add("_hidden");
            document.querySelector("[data-previous]").classList.remove("_active");
            document.querySelector("[data-previous]").querySelector('.nav__link ._underline').classList.remove("_active");
            document.querySelector("[data-previous]").removeAttribute("data-previous");
        }
        e.target.closest(".submenu").setAttribute("data-previous", "");
        e.target.closest(".submenu").classList.toggle("_active");
        e.target.closest(".submenu").querySelector('.nav__link ._underline').classList.toggle("_active");
        e.target.closest(".submenu").querySelector(".submenu__list").classList.toggle("_hidden")
    }
    if (!e.target.closest(".submenu") && document.querySelector("[data-previous]")) {
        document.querySelector("[data-previous]").querySelector(".submenu__list").classList.add("_hidden");
        document.querySelector("[data-previous]").classList.remove("_active");
        document.querySelector("[data-previous]").querySelector('.nav__link ._underline').classList.remove("_active");
        document.querySelector("[data-previous]").removeAttribute("data-previous");
    }
});

// ========================================================================================================================================================================


// ====================================================================================================================================================================
