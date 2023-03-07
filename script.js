const videoEl = document.querySelector('video');
const playEl = document.querySelector('.play');
const pauseEl = document.querySelector('.pause');
const stopEl = document.querySelector('.stop');
const forwardEl = document.querySelector('.forward');
const backwardEl = document.querySelector('.backward');
const timingEl = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');
const volumeEl = document.querySelector('.volume');


playEl.addEventListener('click', function (e) {
    videoEl.play();
});

pauseEl.onclick = () => {
    videoEl.pause();
};

stopEl.onclick = () => {
    videoEl.pause();
    videoEl.currentTime = 0;
};

forwardEl.onclick = () => {
    videoEl.currentTime += 1;
};

backwardEl.onclick = () => {
    videoEl.currentTime -= 1;
};

videoEl.addEventListener('timeupdate', e => {
    currentTimeEl.innerText = videoEl.currentTime;
    timingEl.value = videoEl.currentTime / videoEl.duration * 100;
});

timingEl.addEventListener('input', () => {
    videoEl.currentTime = timingEl.value / 100 * videoEl.duration;
});

volumeEl.addEventListener('input', () => {
    videoEl.volume = volumeEl.value;
});
