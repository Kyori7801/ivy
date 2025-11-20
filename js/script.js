const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  x = window.pageYOffset;
  if (x > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
// -------------------------- CARTEGORY-LEFT---------

const itemSliderBar = document.querySelectorAll(".catergory-left-li");
itemSliderBar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});
