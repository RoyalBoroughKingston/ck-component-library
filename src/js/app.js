/* Mobile menu class toggles */
const hamburger = document.getElementById("jsHamburger");
const searchSection = document.getElementById("jsSearch");
const searchOuterSection = document.getElementById("jsSearchOuter");
const mobileNav = document.getElementById("jsMobileMenu");
const body = document.getElementById("jsBody");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("nav--hamburger--active");
  searchSection.classList.toggle("search__form--hide");
  searchOuterSection.classList.toggle("search__outer--menu");
  mobileNav.classList.toggle("nav--mobile--active");
  body.classList.toggle("noscroll");
});
