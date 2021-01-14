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
