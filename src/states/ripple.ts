import './styles/ripple.scss';

var button = document.querySelector('button');
button.addEventListener('mousedown', handleMouseDown);
button.addEventListener('touchstart', handleTouchStart);

function handleMouseDown(e) {
  const x = e.clientX;
  const y = e.clientY;
  const boundingClientRect = button.getBoundingClientRect();

  button.style.setProperty('--x', `${x - boundingClientRect.left}px`);
  button.style.setProperty('--y', `${y - boundingClientRect.top}px`);
}

function handleTouchStart(e) {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  const boundingClientRect = button.getBoundingClientRect();

  button.style.setProperty('--x', `${x - boundingClientRect.left}px`);
  button.style.setProperty('--y', `${y - boundingClientRect.top}px`);
}
