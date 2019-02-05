'use srtrict';
if (document.title === 'reviews Insight') {
    var content = document.querySelector('.content');
    var modal = document.querySelector('.modal');
    var close = document.querySelector('.modal__close');
    var open = document.querySelector('.button--review');

    close.addEventListener('click', function () {
      modal.style.opacity = '0';
      modal.style.zIndex = '0';
      modal.style.visibility = 'hidden';
      modal.style.height = '0';

      content.style.opacity = '1';
      content.style.zIndex = '0';
      content.style.visibility = 'visible';
    });

    open.addEventListener('click', function (e) {
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
    });
}
