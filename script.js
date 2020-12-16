$(document).ready(function () {

  $('.slider-partner').not('.slick-initialized').slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.prev-partner-slider'),
    nextArrow: $('.next-partner-slider'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
});
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});


function openTabs(el) {
  var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  var product = btn.dataset.product; // lấy giá trị trong data-product

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  }); //lặp qua các tab content để remove class active

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  }); //lặp qua các tab links để remove class active

  document.querySelector("#" + product).classList.add("active");
  // trả về phần tử đầu tiên có id="" được add class active

  btn.classList.add("active");
  // các button mà chúng ta click vào sẽ được add class active
}
