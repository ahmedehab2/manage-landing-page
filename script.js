let hamburgerMenu = document.querySelector("#logo");
let modal = document.querySelector("#modal-nav");
let modalUl = document.querySelector("#modal-ul");
let Toggle = true;
hamburgerMenu.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  if (Toggle) {
    hamburgerMenu.src = "./images/icon-close.svg";
  } else {
    hamburgerMenu.src = "./images/icon-hamburger.svg";
  }
  Toggle = !Toggle;
});

window.addEventListener("mouseup", function (e) {
  if (e.target !== modalUl && e.target !== hamburgerMenu) {
    modal.classList.add("hidden");
    hamburgerMenu.src = "./images/icon-hamburger.svg";
    Toggle = !Toggle;
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  freeMode: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    799: {
      slidesPerView: 2.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: false,
    },
  },
});
