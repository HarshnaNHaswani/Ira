const navSide = document.querySelector('.nav-side');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
  navSide.classList.toggle('nav-hidden');
})
