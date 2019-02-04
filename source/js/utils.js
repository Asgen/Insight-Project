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

  window.funcs = {
    showMessage: showMessage
  }
})();
