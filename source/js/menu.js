'use strict';
(function () {
  var openButton = document.querySelector('.page-header__menu-button');
  var closeButton = document.querySelector('.main-nav__close');

  var menuToggle = function (state) {
    var menu = document.querySelector('.main-nav');
    var links = document.querySelectorAll('.main-nav__item');
    var translate = 100;

    var parcer = {
      do: function () {
        links.forEach(function (el) {
          el.style.transform = 'translateY(' + translate + 'px)';
          translate += 50;
        });
      }
    };

    switch(state){
      case 'open':
        parcer.do();
        menu.style.zIndex = '1';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        links.forEach(function (el) {
          el.style.transform = 'translateY(0)';
        });
        break;
      case 'close':              
        menu.style.opacity = '0';
        menu.style.zIndex = '0';
        menu.style.visibility = 'hidden';
        parcer.do();
        break;
    } 
  };

  openButton.addEventListener('click', function () {
    menuToggle('open')
  });
  closeButton.addEventListener('click', function () {
    menuToggle('close')
  });

  window.menuToggle = menuToggle;
})();
