/*Мобильное меню*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

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

  var image = "img/icon-map-pin.svg";
  var mMarker = new google.maps.Marker({
    position: {lat: 59.93637055, lng: 30.32163799},
    map: map,
    icon: image
  });
}
