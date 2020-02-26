let openClosenMenu = document.querySelector(".menuContainer")
let openNav = document.querySelector("nav")
openClosenMenu.addEventListener('click', function toggle(x) {
  openClosenMenu.classList.toggle("change")
  openNav.classList.toggle("mobileNav")
})
