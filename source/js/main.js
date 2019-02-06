'use strict';
var pageTitle = document.querySelector('title');
new MutationObserver(function(mutations) {
    console.log(mutations[0].target.textContent);
    if(mutations[0].target.textContent === 'reviews Insight') {
      window.funcs.changeSlides();
    }

  // Если есть кнопка открытия модалки, то выполнить
  var open = document.querySelector('.button--review');
  if(open) {
    open.addEventListener('click', window.funcs.onModalOpen);
  }


}).observe(
    pageTitle,
    { characterData: false, attributes: false, childList: true, subtree: false }
);
