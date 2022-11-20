// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const smallheaderEl = document.querySelector('.small-header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
btnNavEl.addEventListener('click', function () {
  smallheaderEl.classList.toggle('nav-open');
});

//////////////////////////////////////////////////////////
