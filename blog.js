const menu = document.querySelector(".menu");
const mobileNavLink = document.querySelector(".mobile-nav-link");

menu.addEventListener("click", function () {
  mobileNavLink.style.display =
    mobileNavLink.style.display === "flex" ? "none" : "flex";
});
