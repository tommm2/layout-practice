import "@fortawesome/fontawesome-free/css/all.css";

const nav = document.getElementById("site-menu");
const btn = document.getElementById("menuBtn");
const hiddenNav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  hiddenNav.classList.toggle("hidden");
}

btn.addEventListener('click', () => {
  navToggle()
})
