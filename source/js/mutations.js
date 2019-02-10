'use strict';
(function () {
  var pageTitle = document.querySelector('title');
  var logo = document.querySelector('.page-header__logo');
  //var loader = document.querySelector('.loader');
  //var columns = loader.querySelectorAll('.loader__column span');

  new MutationObserver(function(mutations) {
    var func = window.funcs;

    /*// Лоадер
    loader.style.display = 'block';
    columns.forEach(function(el, i) {
      el.style.width = '0';
      el.style.transition = 'width ' + (0.2 + (i * 0.1)) + 's ease-in-out';
    });


    setTimeout(function() {
      columns.forEach(function(el) {
        el.style.width = '100%';
      });
    }, 10);


    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000);*/

    // Если страница отзывов
    if(mutations[0].target.textContent === window.data.PageTitle.REVIEWS) {
      func.changeSlides();
    }

    logo.style.display = 'block';
    // Если главная
    if(mutations[0].target.textContent === window.data.PageTitle.MAIN) {
      logo.style.display = 'none';
    }

    // Если есть кнопка открытия модалки, то выполнить
    var open = document.querySelector('.button--open-modal');
    if(open) {
      open.addEventListener('click', func.onModalOpen);
    }

    // Если есть форма, то выполнить
    var form = document.querySelector('.form');
    if (form) {
      form.addEventListener('click', func.onInputClick);
      form.addEventListener('change', func.onFormChange);
      form.addEventListener('submit', func.onFormSubmit);
    }

  }).observe(
      pageTitle,
      { characterData: false, attributes: false, childList: true, subtree: false }
  );
})();
