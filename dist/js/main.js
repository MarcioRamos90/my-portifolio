// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

// Set initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggelMenu);

function toggelMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // Set Menu Satate
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    // Set Menu Satate
    showMenu = false;
  }
}
