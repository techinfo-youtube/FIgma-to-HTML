const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const mobileNavigation = document.querySelector(".mobile-navigation");

//events
mobileMenu.addEventListener("click", () => {
  mobileNavigation.classList.add("active");
  mobileClose.classList.add("active");
});

mobileClose.addEventListener("click", () => {
  mobileNavigation.classList.remove("active");
  mobileClose.classList.remove("active");
});
