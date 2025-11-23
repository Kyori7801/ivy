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

if(btnFilter){
  btnFilter.addEventListener("click", function () {
  filterSlider.classList.toggle("block");
});
}

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
if(btnRemove){
  btnRemove.addEventListener("click", function () {
  chooseSize.forEach((item) => item.classList.remove("choose"));
  chooseColor.forEach((item) => item.classList.remove("choose"));
});
}

//--------------------- product----------------
 const bigImg= document.querySelector(".product-content-left-big-img img")
 const smallImg = document.querySelectorAll(".product-content-left-small-img img")

 const baoQuan= document.querySelector(".product-content-right-bottom-content-tille-item.baoquan")
 const chiTiet =document.querySelector(".product-content-right-bottom-content-tille-item.gioithieu")
 const btnDetals = document.querySelector(".product-content-right-bottom-top") 


  smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
      bigImg.src= imgItem.src
    })
  })


 if(baoQuan || chiTiet || btnDetals){
 




  document.querySelector(".product-content-right-bottom-content-details-baoquan").style.display="none";
  baoQuan.addEventListener("click",function(){
    document.querySelector(".gioithieu").classList.remove("active")
    document.querySelector(".baoquan").classList.add("active")
    document.querySelector(".product-content-right-bottom-content-details-gioithieu").style.display="none";
    document.querySelector(".product-content-right-bottom-content-details-baoquan").style.display="block";
  })

  chiTiet.addEventListener("click",function(){
     document.querySelector(".baoquan").classList.remove("active")
    document.querySelector(".gioithieu").classList.add("active")
    document.querySelector(".product-content-right-bottom-content-details-baoquan").style.display="none";
    document.querySelector(".product-content-right-bottom-content-details-gioithieu").style.display="block";
  })

  btnDetals.addEventListener("click",function(){
    document.querySelector(".product-content-right-bottom-content").classList.toggle("deactive-details")
  })
 }


