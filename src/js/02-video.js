import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
//------------------------------------------------------
// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
//------------------------------------------------------

const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY) ? localStorage.getItem(STORAGE_KEY) : 0;

player.setCurrentTime(currentTime);

const saveTimeOfVideo = event => {
  localStorage.setItem(STORAGE_KEY, event.seconds);
};

player.on('timeupdate', throttle(saveTimeOfVideo, 1000));






