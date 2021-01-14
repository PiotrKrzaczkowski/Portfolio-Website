// HANDLE BURGER MENU BUTTON AND MENU LINKS
const ul = document.querySelector(".mobile-list");
const burgerBtn = document.querySelector(".burger-btn");
const ulBtns = document.querySelectorAll(".mobile-menu a");
let open = false;

ulBtns.forEach((i) =>
  i.addEventListener("click", () => {
    if (open) {
      ul.classList.remove("active");
      burgerBtn.classList.remove("active");
      open = false;
    }
  })
);

burgerBtn.addEventListener("click", () => {
  if (!open) {
    ul.classList.add("active");
    burgerBtn.classList.add("active");
    open = true;
  } else {
    if (open) {
      ul.classList.remove("active");
      burgerBtn.classList.remove("active");
      open = false;
    }
  }
});

const desktopMenu = document.querySelector(".desktop-menu");
const desktopNav = document.querySelector(".desktop-nav");
const title = document.querySelector(".desktop-title-link");

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    desktopMenu.classList.add("bcg");
    desktopNav.classList.add("bcg");
    title.classList.add("bcg");
  } else {
    desktopMenu.classList.remove("bcg");
    desktopNav.classList.remove("bcg");
    title.classList.remove("bcg");
  }
});

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});
