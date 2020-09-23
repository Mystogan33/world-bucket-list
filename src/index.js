import {initMap} from './maps';
import {buildAllDreams} from './dream';

function init() {
  initMap();
  buildAllDreams();
}

window.init = init;
