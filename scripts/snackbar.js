const btnSnackbar = document.querySelector('.snackbar-eg');
const snackbars = document.querySelectorAll('.snackbar');

let toggle = 0;


console.log(btnSnackbar)
btnSnackbar.addEventListener('click', () => {
  if (toggle === 0) {
    toggle = 1;
    snackbars.forEach(snackbar => snackbar.classList.remove('hidden'));
  } else {
    toggle = 0;
    snackbars.forEach(snackbar => snackbar.classList.add('hidden'));
  }
})

