'use strict';
(function (){
  if(document.title === 'reviews Insight') {
    var form = document.querySelector('.form');
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


    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        window.xhrRequest('form_processing.php', 'POST', onSuccessSend, funcs.onError, new FormData(form));
    });
  }
})();
