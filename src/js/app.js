const hamburger = document.getElementById("jsHamburger");
const searchSection = document.getElementById("jsSearch");
const mobileNav = document.getElementById("jsMobileMenu");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("nav--hamburger--active");
  searchSection.classList.toggle("search__form--hide");
  mobileNav.classList.toggle("nav--menu--mobile--active");
});
