export default function navbar() {
    const NAVBAR_SHOW_TOGGLER_ELEMENT       = document.getElementById("navBarShowToggler");
    const NAVBAR_COLLAPSE_TOGGLER_ELEMENT   = document.getElementById("navBarCollapseToggler");
    const NAVBAR_OFFCANVAS_ELEMENT          = document.getElementById("navBarOffcanvas");
    const NAVBAR_OFFCANVAS_LAYER            = document.getElementById("offcanvasLayer");

    NAVBAR_SHOW_TOGGLER_ELEMENT.addEventListener("click", function() {
        NAVBAR_OFFCANVAS_ELEMENT.classList.add("animate__fadeInRight");    
        NAVBAR_OFFCANVAS_ELEMENT.classList.remove("offcanvas-collapse");
        NAVBAR_OFFCANVAS_LAYER.classList.remove("d-none");
        NAVBAR_OFFCANVAS_LAYER.classList.add("animate__hideElement");
    })

    NAVBAR_COLLAPSE_TOGGLER_ELEMENT.addEventListener("click", function() {
        NAVBAR_OFFCANVAS_ELEMENT.classList.remove("animate__fadeInRight");
        NAVBAR_OFFCANVAS_ELEMENT.classList.add("animate__fadeOutRight");    
        NAVBAR_OFFCANVAS_LAYER.classList.remove("animate__hideElement");
        NAVBAR_OFFCANVAS_LAYER.classList.add("animate__showElement");
    })

    NAVBAR_OFFCANVAS_ELEMENT.addEventListener('animationend', function() {
        if (NAVBAR_OFFCANVAS_ELEMENT.classList.contains("animate__fadeOutRight")) {
            NAVBAR_OFFCANVAS_ELEMENT.classList.remove("animate__fadeOutRight");
            NAVBAR_OFFCANVAS_ELEMENT.classList.add("offcanvas-collapse");
        }   
        if(NAVBAR_OFFCANVAS_LAYER.classList.contains("animate__showElement")) {
            NAVBAR_OFFCANVAS_LAYER.classList.remove("animate__showElement");
            NAVBAR_OFFCANVAS_LAYER.classList.add("d-none");
        }
    })
}