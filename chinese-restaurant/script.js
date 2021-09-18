const hgroup = document.querySelector("hgroup");
const nav = document.querySelector("nav");

hgroup.classList.add("silde");

// Event listener
window.addEventListener("scroll", () => {
  const { scrollTop } = document.documentElement;
  if (scrollTop > 200) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
});
