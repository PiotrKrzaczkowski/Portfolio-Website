// TOGGLE BURGER MENU
const ul = document.querySelector(".mobile-list");
const burgerBtn = document.querySelector(".burger-btn");
let open = false;

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
