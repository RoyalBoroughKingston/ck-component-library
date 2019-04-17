/* Mobile menu class toggles */
const hamburger = document.getElementById("jsHamburger");
const searchSection = document.getElementById("jsSearch");
const searchOuterSection = document.getElementById("jsSearchOuter");
const mobileNav = document.getElementById("jsMobileMenu");
const body = document.getElementById("jsBody");

if(hamburger){
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("nav--hamburger--active");
    searchSection.classList.toggle("search__form--hide");
    searchOuterSection.classList.toggle("search__outer--menu");
    mobileNav.classList.toggle("nav--mobile--active");
    body.classList.toggle("noscroll");
  });
}

/* Accordion */ 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("accordion--active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}