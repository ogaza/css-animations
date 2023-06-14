export function setElementDataStateAttributeBasedOnEventType(htmlElement, eventType) {
  switch (eventType) {
    case 'mousedown':
    case 'touchstart':
      htmlElement.dataset.state = 'pressed';
      break;
    case 'mouseup':
    case 'touchend':
      htmlElement.removeAttribute('data-state');
      break;
    case 'click':
      htmlElement.dataset.state = 'clicked';
      break;
    default:
      break;
  }
}

export function setEventCoordinatesInElementProperties(htmlElement, eventCoordinates) {
  const [x, y] = eventCoordinates;
  const boundingClientRect = htmlElement.getBoundingClientRect();

  x && htmlElement.style.setProperty('--x', `${x - boundingClientRect.left}px`);
  y && htmlElement.style.setProperty('--y', `${y - boundingClientRect.top}px`);
}

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
