const iconOne = document.querySelector('.iconOne');
const iconTwo = document.querySelector('.iconTwo');
const iconThree = document.querySelector('.iconThree');
const iconFour = document.querySelector('.iconFour');

document.addEventListener('keydown', keyCheck);

iconOne.classList.add('active');

function keyCheck(event) {
  if (event.keyCode === 90) {
    console.log('Z is pressed')
    iconOne.classList.add('hidden');
    iconOne.classList.remove('active');
    iconTwo.classList.add('active');
    iconThree.classList.add('hidden');
    iconFour.classList.add('hidden');
  }

  if (event.keyCode === 75) {
    console.log('K is pressed')
    iconOne.classList.add('hidden');
    iconTwo.classList.remove('active');
    iconTwo.classList.add('hidden');
    iconThree.classList.add('active');
    iconFour.classList.add('hidden');
  }

  if (event.keyCode === 68) {
    console.log('D is pressed')
    iconOne.classList.add('hidden');
    iconTwo.classList.add('hidden');
    iconThree.classList.remove('active');
    iconFour.classList.add('active');
  }

  if (event.keyCode === 86) {
    console.log('V is pressed')
    window.location.href = "/mobile/test_result";
  }
}