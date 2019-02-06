'use strict';
(function () {
  // Функция удаления элемента по нажатию на Esc
  var onEscRemove = function (element) {
    var esc = window.data.KeyCode.ESC_KEYCODE;
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === esc) {
        element.remove();
      }
    });
    document.removeEventListener('keydown', function (evt) {
      if (evt.keyCode === esc) {
        element.remove();
      }
    });
  };

  // Функция удаления элемента по клику
  var onClickRemoveThis = function (element) {
    element.addEventListener('click', function () {
      element.remove();
    });
  };

  // Функция отрисовки сообщения из шаблона
  var showMessage = function (status) {
    // Фрагмент куда будет добавлять метки
    var fragment = document.createDocumentFragment();

    var target = document.querySelector('body');

    var wrapper = document.createElement('div');
    var container = document.createElement('div');
    var message = document.createElement('p');

    wrapper.classList.add('message');
    container.classList.add('message__container');
    message.classList.add('message__text');

    if (status === 'success') {
      container.classList.add('message__container--success');
      message.textContent = 'okBoy';
    } else {
      container.classList.add('message__container--error');
      message.textContent = 'fucked up';
    }
    container.appendChild(message);
    wrapper.appendChild(container);
    fragment.appendChild(wrapper);
    target.appendChild(fragment);

    onEscRemove(wrapper);
    onClickRemoveThis(wrapper);
  };

  // Функция слайдера
  var changeSlides = function () {
    var slider = document.querySelector('.slider');
    var inputs = slider.querySelectorAll('input');
    var slides = slider.querySelectorAll('.slide');
    var labels = slider.querySelectorAll('label');
    var button = slider.querySelector('.button--review');
    var sliderList = document.querySelector('.slider__list');

    window.addEventListener('load', function () {
      var positionTop = slides[0].scrollHeight + 200;
      button.style.top = positionTop + 'px';

      window.removeEventListener('load', function () {
        var positionTop = slides[0].scrollHeight + 200;
        button.style.top = positionTop + 'px';
      });
    });

    slider.addEventListener('change', function (e) {
      // Номер айдишника последним символом указан, берем его в качестве номера слайда отняв еденицу
      var slideIndex = Number(e.target.id.slice(-1)) - 1;
      // Ширина слайда равна 100%
      var margin = slideIndex * 100;
      sliderList.style.marginLeft = '-' + margin + '%';
      // Cбрасывает фон лэйбла
      labels.forEach(function (elem) {
        elem.style.boxShadow = 'none';
      })
      // Подсвечивает лэйбл
      labels[slideIndex].style.boxShadow = '0px 0px 0px 5px white';

      // Позиционирование кнопки
      var positionTop = slides[slideIndex].scrollHeight + 200;

      button.style.opacity = '0';

      setTimeout(function() {
        button.style.top = positionTop + 'px';
        button.style.opacity = '1';
      }, 400);
    });

    /*document.addEventListener('touchmove', function (e) {
  console.log(e.touches[0].clientX);

})*/
  };

  //--------------Модалка
  var renderModal = function (templateId, templateClass) {
    // Вставляем разметку в body
    var body = document.querySelector('body');
    // Переменная для хранения Метки из шаблона
    var modalTemplate = document.querySelector(templateId)
      .content
      .querySelector(templateClass);

    var modalElement = modalTemplate.cloneNode(true);
    onModalClose(modalElement);
    body.appendChild(modalElement);
  };

  var onModalClose = function (modalEl) {
    var content = document.querySelector('.content');
    var closeButton = modalEl.querySelector('.modal__close');

    closeButton.addEventListener('click', function () {
      modalEl.style.opacity = '0';
      modalEl.style.zIndex = '0';
      modalEl.style.visibility = 'hidden';
      modalEl.style.height = '0';

      content.style.opacity = '1';
      content.style.zIndex = '0';
      content.style.visibility = 'visible';
    });
  };

  var onModalOpen = function (e) {
    var content = document.querySelector('.content');
    renderModal('#modal', '.modal');
    var modal = document.querySelector('.modal');

    content.style.opacity = '0';
    content.style.zIndex = '0';
    content.style.visibility = 'hidden';

    setTimeout(function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      modal.style.height = '100%';
      modal.style.opacity = '1';
      modal.style.zIndex = '1';
      modal.style.visibility = 'visible';
    }, 400);
  };
  //---------------------------модалка конец------

  window.funcs = {
    showMessage: showMessage,
    changeSlides: changeSlides,
    renderModal: renderModal,
    onModalClose: onModalClose,
    onModalOpen: onModalOpen
  }
})();
