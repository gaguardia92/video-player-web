const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", (event) => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("play pulsado");
});

$pause.addEventListener("click", (event) => {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  console.log("pause pulsado");
});

$backward.addEventListener("click", (event) => {
  $video.currentTime -= 10;
  console.log("backward pulsado");
});

$forward.addEventListener("click", (event) => {
  $video.currentTime += 10;
  console.log("forward pulsado");
});

$video.addEventListener("loadedmetadata", (event) => {
  $progress.max = $video.duration;
  console.log("Video cargado");
});

$video.addEventListener("timeupdate", (event) => {
  $progress.value = $video.currentTime;
  //console.log("Actualizando tiempo desde video");
});

$progress.addEventListener("input", (event) => {
  $video.currentTime = $progress.value;
  console.log($progress.value);
});
