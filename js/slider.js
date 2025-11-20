const imgPosition = document.querySelectorAll(".slider-container img");
const imgContainer = document.querySelector(".slider-container");
const dotItem = document.querySelectorAll(".dot");
let index = 0;
// console.log(imgPosition);
imgPosition.forEach(function (image, i) {
  image.style.left = i * 100 + "%";
  dotItem[i].addEventListener("click", function () {
    index = i;
    sliders(index);
    resetInterval();
  });
});
function imgSlide() {
  index++;
  if (index >= imgPosition.length) {
    index = 0;
  }
  sliders(index);
}
function sliders(idx) {
  imgContainer.style.left = "-" + idx * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[idx].classList.add("active");
}

let slideInterval = setInterval(imgSlide, 3000);
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(imgSlide, 3000);
}
