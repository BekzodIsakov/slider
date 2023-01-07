const $leftBtn = document.getElementById("left-button");
const $rightBtn = document.getElementById("right-button");
const $$cards = document.querySelectorAll(".card");
const $slider = document.querySelector(".slider");
const $progress = document.querySelector(".progress");
const $$buttons = document.querySelectorAll(".slider-buttons button");

const cardTotal = 5;
let position = 0;
handleSliderButtons();

function setScrollBy() {
  if (document.documentElement.clientWidth <= 600) {
    $slider.style.setProperty("--scrollBy", "109%");
  } else if (document.documentElement.clientWidth <= 760) {
    $slider.style.setProperty("--scrollBy", "105%");
  } else {
    $slider.style.setProperty("--scrollBy", "77%");
  }
}

new ResizeObserver(setScrollBy).observe(document.documentElement);
setScrollBy();

$leftBtn.onclick = slideRight;
$rightBtn.onclick = slideLeft;

function slideRight() {
  if (position === 0) return;

  position += 1;
  slide();
  handleProgressBar();
  handleSliderButtons();
}

function slideLeft() {
  if (position === -4) return;

  position += -1;
  slide();
  handleProgressBar();
  handleSliderButtons();
}

function slide() {
  $slider.style.setProperty("--position", position);
}

function handleProgressBar() {
  let progressWidth = ((position * -1) / (cardTotal - 1)) * 100;
  $progress.style.width = `${progressWidth}%`;
}

function handleSliderButtons() {
  if (position === 0) {
    $$buttons[0].disabled = true;
  } else if (position === -4) {
    $$buttons[1].disabled = true;
  } else {
    $$buttons[0].disabled = false;
    $$buttons[1].disabled = false;
  }
}
