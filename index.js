// HANDLE BURGER MENU BUTTON AND MENU LINKS
const mobileMenuList = document.querySelector(".mobile-list");
const burgerBtn = document.querySelector(".burger-btn");
const ulBtns = document.querySelectorAll(".mobile-menu a");
let open = false;

// SIDE LIST LINKS TOGGLE
ulBtns.forEach((i) =>
  i.addEventListener("click", () => {
    if (open) {
      mobileMenuList.classList.remove("active");
      burgerBtn.classList.remove("active");
      open = false;
    }
  })
);
// BURGER MENU BUTTON TOGGLE LIST AND BTN ANIMATION
burgerBtn.addEventListener("click", () => {
  if (!open) {
    mobileMenuList.classList.add("active");
    burgerBtn.classList.add("active");
    open = true;
  } else {
    if (open) {
      mobileMenuList.classList.remove("active");
      burgerBtn.classList.remove("active");
      open = false;
    }
  }
});

// ANIMATIONS ON SCROLL

const linksContainer = document.querySelector(".header-links-container");
const desktopMenu = document.querySelector(".desktop-menu");
const desktopNav = document.querySelector(".desktop-nav");
const title = document.querySelector(".desktop-title-link");

setTimeout(() => {
  linksContainer.classList.add("visible");
}, 500);

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

  if (window.scrollY > 130) {
    linksContainer.classList.remove("visible");
  } else {
    linksContainer.classList.add("visible");
  }
});

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("slide");
    } else {
      reveals[i].classList.remove("slide");
    }
  }
}

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
