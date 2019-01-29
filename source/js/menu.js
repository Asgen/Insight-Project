'use strict';
var openButton = document.querySelector('.page-header__menu-button');
var menu = document.querySelector('.main-nav');
var closeButton = menu.querySelector('.main-nav__close');
var links = document.querySelector('.main-nav__list');

var link1 = document.querySelector('.main-nav__item:first-of-type');
var link2 = document.querySelector('.main-nav__item:nth-of-type(2)');
var link3 = document.querySelector('.main-nav__item:nth-of-type(3)');
var link4 = document.querySelector('.main-nav__item:nth-of-type(4)');

openButton.addEventListener('click', function () {
  link1.style.marginTop = '200px';
  link2.style.marginTop = '150px';
  link3.style.marginTop = '100px';
  link4.style.marginTop = '50px';

  menu.style.zIndex = '1';
  menu.style.opacity = '1';
  menu.style.visibility = 'visible';

  link1.style.marginTop = '0';
  link2.style.marginTop = '0';
  link3.style.marginTop = '0';
  link4.style.marginTop = '0';

});

closeButton.addEventListener('click', function () {
  menu.style.opacity = '0';
  menu.style.zIndex = '0';
  menu.style.visibility = 'hidden';

  link1.style.marginTop = '200px';
  link2.style.marginTop = '150px';
  link3.style.marginTop = '100px';
  link4.style.marginTop = '50px';
});
