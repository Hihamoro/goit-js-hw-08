import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(VIDEO_KEY, seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(VIDEO_KEY));
