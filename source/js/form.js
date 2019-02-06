'use strict';
(function (){
  var form = document.querySelector('.form');
  if(form) {
    // Callback при успешной отправке
    var onSuccessSend = function (xhr, evt) {
      // Сброс формы
      form.reset();
      // Показывает сообщение об успешной отправке (логика закрытия внутри)
      window.funcs.showMessage('success');
    };

    var onError = function (xhr) {
      window.funcs.showMessage('red');
    };

    var onInputClick = function (evt) {
      var cleaner = form.querySelector('.focus');
      if(cleaner) {
        cleaner.classList.remove('focus');
      }
      evt.target.parentElement.classList.add('focus');
    };

    var onFormChange = function (e) {
      if (e.target.value) {
        e.target.parentElement.classList.add('filled');
      } else {
        e.target.parentElement.classList.remove('filled');
      }
    };

    var onFormSubmit = function (evt) {
      evt.preventDefault();
      window.xhrRequest('form_processing.php', 'POST', onSuccessSend, funcs.onError, new FormData(form));
    };

    form.addEventListener('click', onInputClick);
    form.addEventListener('change', onFormChange);
    form.addEventListener('submit', onFormSubmit);
  }
})();
