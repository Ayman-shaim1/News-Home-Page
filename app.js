const overlay = document.querySelector(".overlay");
const menuContent = document.getElementById("menu-content");
const btnShowMenu = document.getElementById("btn-show");
const btnCloseMenu = document.getElementById("btn-close");

// window resize event :
window.addEventListener("resize", e => {
  if (e.target.innerWidth > 768) {
    overlay.classList.remove("show");
    menuContent.classList.remove("show");
  }
});

// open menu :
btnShowMenu.addEventListener("click", () => {
  overlay.classList.add("show");
  menuContent.classList.add("show");
});

// close menu :
btnCloseMenu.addEventListener("click", () => {
  overlay.classList.remove("show");
  menuContent.classList.remove("show");
});
