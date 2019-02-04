'use strict';
(function () {
  var Color = {
    onHoverLinkColor: 'hsla(195, 78%, 65%, 1)',
    whiteHalfTransparent: 'hsla(0, 0%, 100%, 0.5)'
  };

  var breakPoints = {
    xs: 410,
    sm: 610,
    tb: 900
  };

  var marginToMoveSlide = {
    onXxs: 300,
    onXs: 380,
    onSm: 580,
    onTb: 880
  };

  // Коды клавиш
  var KeyCode = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13
  }

  window.data = {
    Color: Color,
    breakPoints: breakPoints,
    marginToMoveSlide: marginToMoveSlide,
    KeyCode: KeyCode
  }
})();
