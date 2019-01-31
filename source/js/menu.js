'use strict';
(function () {
  var openButton = document.querySelector('.page-header__menu-button');
  var closeButton = document.querySelector('.main-nav__close');

  var closeMenu = function () {
    var menu = document.querySelector('.main-nav');
    var link1 = document.querySelector('.main-nav__item:first-of-type');
    var link2 = document.querySelector('.main-nav__item:nth-of-type(2)');
    var link3 = document.querySelector('.main-nav__item:nth-of-type(3)');
    var link4 = document.querySelector('.main-nav__item:nth-of-type(4)');
    var link5 = document.querySelector('.main-nav__item:nth-of-type(5)');

    menu.style.opacity = '0';
    menu.style.zIndex = '0';
    menu.style.visibility = 'hidden';

    link1.style.transform = 'translateY(100px)';
    link2.style.transform = 'translateY(150px)';
    link3.style.transform = 'translateY(200px)';
    link4.style.transform = 'translateY(250px)';
    link5.style.transform = 'translateY(250px)';
  };

  var openMenu = function () {
    var menu = document.querySelector('.main-nav');
    var link1 = document.querySelector('.main-nav__item:first-of-type');
    var link2 = document.querySelector('.main-nav__item:nth-of-type(2)');
    var link3 = document.querySelector('.main-nav__item:nth-of-type(3)');
    var link4 = document.querySelector('.main-nav__item:nth-of-type(4)');
    var link5 = document.querySelector('.main-nav__item:nth-of-type(5)');

    link1.style.transform = 'translateY(100px)';
    link2.style.transform = 'translateY(150px)';
    link3.style.transform = 'translateY(200px)';
    link4.style.transform = 'translateY(250px)';
    link5.style.transform = 'translateY(250px)';

    menu.style.zIndex = '1';
    menu.style.opacity = '1';
    menu.style.visibility = 'visible';

    link1.style.transform = 'translateY(0)';
    link2.style.transform = 'translateY(0)';
    link3.style.transform = 'translateY(0)';
    link4.style.transform = 'translateY(0)';
    link5.style.transform = 'translateY(0)';
  };

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);

  window.closeMenu = closeMenu;
})();
