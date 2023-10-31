let root = document.documentElement;
let btn = document.querySelector(".theme_button");
let menu_button = document.querySelector(".menu_button");
let nav = document.querySelector("#primary_nav");
btn.addEventListener("click", () => {
  root.classList.toggle("dark");
  if (root.classList.contains("dark")) {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.removeItem("theme",);
  }
});
menu_button.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

if (localStorage.getItem("theme") == "dark"){
  root.classList.add("dark");
}
