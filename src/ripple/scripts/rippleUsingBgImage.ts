import { getEventCoordinates, setEventCoordinatesInElementProperties } from './eventHandlers';

var rippledEl = document.querySelector<HTMLElement>('.ripple-using-bg-image');
rippledEl?.addEventListener('mousedown', handleEvent);
rippledEl?.addEventListener('touchstart', handleEvent);

function handleEvent(e) {
  setEventCoordinatesInElementProperties(rippledEl, getEventCoordinates(e));
}
