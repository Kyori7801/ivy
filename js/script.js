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
//------------------------filter----------------
const btnFilter = document.querySelector(".btn-filter");
const filterSlider = document.querySelector(".catergory-filter-content");
const chooseSize = document.querySelectorAll(
  ".catergory-filter-content-size-choose"
);
const chooseColor = document.querySelectorAll(
  ".catergory-filter-content-color-choose"
);
const btnRemove = document.querySelector(
  ".catergory-filter-content-bottom-remove"
);

btnFilter.addEventListener("click", function () {
  filterSlider.classList.toggle("block");
});

chooseSize.forEach(function (choose, index) {
  choose.addEventListener("click", function () {
    choose.classList.toggle("choose");
  });
});
chooseColor.forEach(function (choose, index) {
  choose.addEventListener("click", function () {
    choose.classList.toggle("choose");
  });
});
btnRemove.addEventListener("click", function () {
  chooseSize.forEach((item) => item.classList.remove("choose"));
  chooseColor.forEach((item) => item.classList.remove("choose"));
});
