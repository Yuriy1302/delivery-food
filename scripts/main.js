const bag = document.querySelector('.button-bag')
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const consal = document.querySelector('.consal');

bag.addEventListener('click', () => {
  modal.classList.add('is-open');
});

close.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

consal.addEventListener('click', () => {
  modal.classList.remove('is-open');
});



new WOW().init();