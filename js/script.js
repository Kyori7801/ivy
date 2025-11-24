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

// -------------------------- lấy dữ liệu từ product page--------------
function loadCart() {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Không đọc được cart từ localStorage", err);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

(function () {
  const buyLink = document.querySelector(".product-content-right-button a");
  if (!buyLink) return;

  buyLink.addEventListener("click", function (e) {
    e.preventDefault();
    const nameSp1 = document.querySelector(".product-content-right-name h1");
    const priceSp1 = document.querySelector(".product-content-right-price p");
    const imgSp1 = document.querySelector(".product-content-left-big-img img");
    const qrySp1 = document.querySelector(".quantity input");

    if (!nameSp1 || !priceSp1 || !imgSp1) {
      console.warn("Thiếu thông tin sản phẩm");
      window.location.href = this.getAttribute("href") || "cart.html";
      return;
    }

    const name = nameSp1.innerText.trim();
    const priceText = priceSp1.innerText;
    const priceNumber = parseInt(priceText.replace(/[^\d]/g, ""), 10) || 0;
    const img = imgSp1.getAttribute("src");
    const qty = qrySp1 ? parseInt(qrySp1.value, 10) || 1 : 1;
    const cart = [
      {
        name: name,
        price: priceNumber, 
        qty: qty,
        img: img,
      },
    ];
    saveCart(cart);
    window.location.href = this.getAttribute("href") || "cart.html";
  });
})();

// --------- cart page---------
(function () {
  const cartRow = document.getElementById("cartRow");
  if (!cartRow) return;

  const cart = loadCart();

  const imgSp1 = cartRow.cells[0].querySelector("img");
  const nameSp = cartRow.cells[1];
  const qtyInput = cartRow.cells[4].querySelector("input");
  const priceSp = cartRow.cells[5];
  const removeBtn = cartRow.querySelector(".cart-remove");

  if (!cart || cart.length === 0) {
    cartRow.style.display = "none";
    updateCartSummary(0, 0);
    return;
  }

  const item = cart[0]; 

  if (imgSp1 && item.img) imgSp1.src = item.img;
     nameSp.innerText = item.name;
  if (qtyInput) qtyInput.value = item.qty;

  let subtotal = item.price * item.qty;
  priceSp.innerHTML = `${subtotal.toLocaleString("vi-VN")} <sup>đ</sup>`;

  updateCartSummary(item.qty, subtotal);

  if (qtyInput) {
    qtyInput.addEventListener("input", function () {
      let qty = parseInt(qtyInput.value, 10);
      if (isNaN(qty) || qty < 1) qty = 1;
      qtyInput.value = qty;
      subtotal = item.price * qty;
      priceSp.innerHTML = `${subtotal.toLocaleString("vi-VN")} <sup>đ</sup>`;
      item.qty = qty;
      saveCart([item]);
      updateCartSummary(qty, subtotal);
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener("click", function () {
      cartRow.style.display = "none";
      saveCart([]);
      updateCartSummary(0, 0);
    });
  }
})();


function updateCartSummary(totalQty, totalMoney) {
  const summaryTable = document.querySelector(".cart-content-right table");
  if (!summaryTable) return;

 
  if (summaryTable.rows[1] && summaryTable.rows[1].cells[1]) {
    summaryTable.rows[1].cells[1].innerText = totalQty;
  }

 
  for (let i = 2; i <= 4; i++) {
    if (summaryTable.rows[i] && summaryTable.rows[i].cells[1]) {
      summaryTable.rows[i].cells[1].innerHTML =
        `${totalMoney.toLocaleString("vi-VN")} <sup>đ</sup>`;
    }
  }
}

// --------------------------delivery-----------------
(function () {
  const deliveryTable = document.querySelector(".delivery-content-right table");
  if (!deliveryTable) return;
  const cart = loadCart();
  if (!cart || cart.length === 0) {
    return;
  }
  const item = cart[0];
  const productRow = deliveryTable.rows[1];
  const totalRow = deliveryTable.rows[2];
  const totalGoodsRow = deliveryTable.rows[3];

  if (!productRow) return;

  const subtotal = item.price * item.qty;


  if (productRow.cells[0]) {
    productRow.cells[0].innerText = item.name;
  }

  if (productRow.cells[2]) {
    productRow.cells[2].innerText = item.qty;
  }

  if (productRow.cells[3]) {
    productRow.cells[3].innerHTML =
      `<p>${subtotal.toLocaleString("vi-VN")} <sup>đ</sup></p>`;
  }

  [totalRow, totalGoodsRow].forEach(function (row) {
    if (row && row.cells[1]) {
      row.cells[1].innerHTML =
        `${subtotal.toLocaleString("vi-VN")} <sup>đ</sup>`;
    }
  });
})();
 console.log(cart(0));


