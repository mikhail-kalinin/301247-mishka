/*Мобильное меню*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/*Интерактивная карта*/
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: {lat: 59.93673603, lng: 30.32177746}
  });
  var image = {
    url: "img/icon-map-pin.svg",
    scaledSize: new google.maps.Size(100, 100),
  }
  var mMarker = new google.maps.Marker({
    position: {lat: 59.93637055, lng: 30.32163799},
    map: map,
    optimized: false,
    icon: image
  });
}

/*Модальное окно*/
var link = document.querySelector("#add-to-cart");

var modal = document.querySelector(".modal-cart__wrapper");
var overlay = document.querySelector(".modal-cart__overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("modal-cart__wrapper--show");
  overlay.classList.add("modal-cart__overlay--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-cart__wrapper--show");
  overlay.classList.remove("modal-cart__overlay--show");
});



window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-cart__wrapper--show")) {
      modal.classList.remove("modal-cart__wrapper--show");
      overlay.classList.remove("modal-cart__overlay--show");
    }
  }
});
