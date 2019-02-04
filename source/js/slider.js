/*'use strict';
(function () {
  var slider = document.querySelector('.slider');
  var inputs = slider.querySelectorAll('input');
  var slides = slider.querySelectorAll('.slide');
  var labels = slider.querySelectorAll('label');

  slider.addEventListener('change', function (e) {
    var index = e.target.id.slice(7); // Отсекает лишние буквы айдишника

    // Убирает все отрисованные слайды и сбрасывает фон лэйбла
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      labels[i].style.backgroundColor = 'transparent';
    }
    // Показывает новый слайд и подсвечивает лэйбл
    slides[index-1].style.display = 'block';
    labels[index-1].style.backgroundColor = window.data.onHoverLinkColor;
  });
})();


document.addEventListener('touchmove', function (e) {
  console.log(e.touches[0].clientX);

})*/
