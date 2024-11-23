const playNpauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

console.log(video.duration)

const volumeBtn = document.querySelector("#volume");
const progressIndicator = document.querySelector("#progress-indicator");
const progessBar = document.querySelector("#progress-bar");
const screenBtn = document.querySelector('#fullscreen');

function playNpauseFn() {
video.paused ? video.play() : video.pause();

}

function updatePlayNPauseIcon() {
const icon = playNpauseBtn.querySelector("i");
icon.textContent = "";

icon.textContent = video.paused ? "play_arrow" : "paused";
}



function muteNunmuteFn() {
video.muted = video.muted ? false : true;
}


function updateVolumeIcon() {
const icon = volumeBtn.querySelector("i");
icon.textContent = "";
icon.textContent = video.muted ? "volume_off" : "volume_up";
}

function updateProgress() {

const progressPercentage = (video.currentTime / video.duration) * 100;

progressIndicator.style.width = `${progressPercentage}%`;
}

function seekingFn(e) {
const updatedTime = (e.offsetX / progessBar.offsetWidth) * video.duration;

video.currentTime = updatedTime;
}

// PLAY AND PAUSE FUNCTIONALITY
video.addEventListener("play", updatePlayNPauseIcon);
video.addEventListener("click", playNpauseFn);
video.addEventListener("pause", updatePlayNPauseIcon);
playNpauseBtn.addEventListener("click", playNpauseFn);


// MUTE AND UNMUTE
video.addEventListener("volumechange", updateVolumeIcon);
volumeBtn.addEventListener("click", muteNunmuteFn);




// PROGRESS
video.addEventListener("timeupdate", updateProgress);

// SEEKING
let mouseIsDown = false;

progessBar.addEventListener("mousedown", () => (mouseIsDown = true));
progessBar.addEventListener("mouseup", () => (mouseIsDown = false));
progessBar.addEventListener("click", seekingFn);
progessBar.addEventListener("mousemove", (e) => mouseIsDown && seekingFn);
