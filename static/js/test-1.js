const iconOne = document.querySelector('.iconOne');
const iconTwo = document.querySelector('.iconTwo');
const iconThree = document.querySelector('.iconThree');

document.addEventListener('keydown', keyCheck);

iconOne.classList.add('active');

function keyCheck(event) {
  if (event.keyCode === 72) {
    console.log('H is pressed')
    iconOne.classList.remove('active');
    iconTwo.classList.add('active');
    iconThree.classList.remove('active');
  }

  if (event.keyCode === 86) {
    console.log('V is pressed')
    iconOne.classList.add('hidden');
    iconTwo.classList.add('hidden');
    iconTwo.classList.remove('active');
    iconThree.classList.add('active');
  }

  if (event.keyCode === 68) {
    console.log('D is pressed')
    window.location.href = "/mobile/test_4";
  }
}