import { getEventCoordinates, getAnimatePulse } from './eventHandlers';

var pulseEl = document.querySelector<HTMLElement>('.pulse');
pulseEl?.addEventListener('mousedown', handleEvent);

const animatePulse = getAnimatePulse();

function handleEvent(e) {
  animatePulse(pulseEl, getEventCoordinates(e));
}
