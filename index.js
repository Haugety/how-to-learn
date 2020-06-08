const content = document.querySelector('#content');
const linkForScroll = document.querySelector('.header__link');

linkForScroll.addEventListener('click', () => {
  content.scrollIntoView({behavior: "smooth"});
});
