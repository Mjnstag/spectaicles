const deviceName = 'Spectaicles'

const letter = document.querySelector('span');

document.addEventListener('keydown', keyCheck)

function keyCheck(event) {
  console.log(event.keyCode);
  if (event.keyCode === 65) {
    console.log('Clicked')
    letter.classList.add('active');
  }
}
