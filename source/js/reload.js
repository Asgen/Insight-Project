var databox;

var init = function () {
  databox = document.querySelector('.content');
  var link = document.querySelectorAll('.main-nav__link');
  var logoLink = document.querySelector('.main-nav__logo');
  if(link) {
    link.forEach(function (elem) {
      elem.addEventListener('click', read);
    });
  }
  logoLink.addEventListener('click', read);
};

var read = function (e) {
  e.preventDefault();

  var path;
  var url;

  var activeLink = document.querySelector('.main-nav__link--active');
  if(activeLink) {
    activeLink.classList.remove('main-nav__link--active');
  }

  if (e.target.href) {
    path = e.target.href;
    var attribute = 'a[href="' + path.slice(22) + '"]';
    var currentLink = document.querySelector(attribute);
    currentLink.classList.add('main-nav__link--active');
    url = path.slice(22, -4) + 'txt'; // 22 символа - это корневой путь, -4 расширение html
  }
  else {
    path = e.target.parentElement.href;
    url = 'index.txt';
  }

  console.log(path);
  //if (e.target.href === window.location.href) {
  //  return; http://localhost:3000/about.html
  //}


  var request = new XMLHttpRequest();
  request.addEventListener('load', show);
  request.open('GET', url, true);
  request.send(null)
};

var show = function (e) {
  var data = e.target;
  var path = e.target.responseURL.slice(22, -4);

  //console.log(e.target.responseURL.slice(22, -3));

  if(data.status == 200){
    databox.innerHTML = data.responseText;
    var state = { 'page_id': 1, 'user_id': 5 };
    var title = 'Hello World';
    var url = path + '.html';

    history.pushState(state, title, url);
    window.closeMenu();
    document.title = path + ' Insight';
    if(path === 'index') {
      document.title = 'Insight';
    }
  }
};

addEventListener('load', init);
