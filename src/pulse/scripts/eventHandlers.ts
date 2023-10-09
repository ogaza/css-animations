export function getEventCoordinates(e) {
  switch (e.type) {
    case 'mousedown':
      return [e.clientX, e.clientY];
    case 'touchstart': {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      return [x, y];
    }
    default:
      return [];
  }
}

const keyframes = [
  { transform: 'translate(-50%, -50%) scale(0)', opacity: '1', visibility: 'visible' },
  { transform: 'translate(-50%, -50%) scale(10)', opacity: '0' }
];

const timing = {
  duration: 500,
  iterations: 1
};

export function getAnimatePulse() {
  let idx = 0;
  return function animatePulse(htmlElement, eventCoordinates) {
    const [x, y] = eventCoordinates;

    const pulses = htmlElement.querySelectorAll('.pulse__element');
    const pulse = pulses[idx++ % 5];

    const boundingClientRect = htmlElement.getBoundingClientRect();
    x && pulse.style.setProperty('--x', `${x - boundingClientRect.left}px`);
    y && pulse.style.setProperty('--y', `${y - boundingClientRect.top}px`);

    pulse.animate(keyframes, timing);
  };
}
