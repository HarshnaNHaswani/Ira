const btnSnackbar = document.querySelector('.snackbar-eg');
const snackbars = document.querySelectorAll('.snackbar');
const btnModalSimple = document.querySelectorAll('.modal-demo1');
const btnModalStacked = document.querySelectorAll('.modal-demo2');
const modalSimple = document.querySelector('.modal-simple')
const modalStacked = document.querySelector('.modal-stacked')

if (btnSnackbar) {
  btnSnackbar.addEventListener('click', () => {
      snackbars.forEach(snackbar => classToggle(snackbar));
  })  
}

const classToggle = (UIcomponent) => UIcomponent.classList.toggle('hidden')

if(btnModalSimple){
  btnModalSimple.forEach(btn => {
    btn.addEventListener('click', () => classToggle(modalSimple))
  });
}

if(btnModalStacked){
  btnModalStacked.forEach(btn => {
    console.log("clicked");
    btn.addEventListener('click', () => classToggle(modalStacked))
  });
}