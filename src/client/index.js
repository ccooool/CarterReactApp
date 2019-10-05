import { connect, play } from './networking';
import { startRendering, stopRendering } from './render';
import { startCapturingInput, stopCapturingInput } from './input';
import { downloadAssets } from './assets';
import { initState } from './state';
import { setLeaderboardHidden } from './leaderboard';
import {Howl} from 'howler';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

var something = 'https://cf-hls-media.sndcdn.com/media/159241/318900/E6o6bOZhvgNO.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLWhscy1tZWRpYS5zbmRjZG4uY29tL21lZGlhLyovKi9FNm82Yk9aaHZnTk8uMTI4Lm1wMyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTU3MDI5OTM3OH19fV19&Signature=I--O9uDd3fZ1t1AXKngMi1mFG2kCxWAPYdyPKHVPK4Pvk0qAJKDd9whfuVfUW3HEcgesfBOQz0CFgiKrpIRTHVGuVfqMjlhql-AE7ld6uwE~cNFtBx3VudUHCjYFlzfFGiDkx3Chl9O~6ALW7W6XX0XBXyYAgjlruwhLJoGc~UUwaAfRinu~5JeZkT4OA2Faqj61h7glb8k4twOAN3YthM90a-TRhpIICdKqbKZ-O-3m0WlA0qMwxRnfj4NVhEy-1IOdB18dVDGZe1sjpZKdKxDOQnB3GpxT0szHIyr9QH6dc4ogO00wsacusLG9UT1YWi4GncoUMwLCsXqfq~sAAw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'

var sound = new Howl({
  src: [something],
  autoplay: true,
  loop: true,
})

sound.play()

const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');

Promise.all([
  connect(onGameOver),
  downloadAssets(),

]).then(() => {
  playMenu.classList.remove('hidden');
  usernameInput.focus();
  playButton.onclick = () => {
    play(usernameInput.value);
    playMenu.classList.add('hidden');
    initState();
    startCapturingInput();
    startRendering();
    setLeaderboardHidden(false);
  };
}).catch(console.error);

function onGameOver() {
  stopCapturingInput();
  stopRendering();
  playMenu.classList.remove('hidden');
  setLeaderboardHidden(true);
}
