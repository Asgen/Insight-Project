'use strict';
(function () {
  var pageTitle = document.querySelector('title');
  var logo = document.querySelector('.page-header__logo');
  //var loader = document.querySelector('.loader');
  //var columns = loader.querySelectorAll('.loader__column span');

  new MutationObserver(function(mutations) {
    var func = window.funcs;

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
