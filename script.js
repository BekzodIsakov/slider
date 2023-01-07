const $leftBtn = document.getElementById("left-button");
const $rightBtn = document.getElementById("right-button");
const $$cards = document.querySelectorAll(".card");
const $slider = document.querySelector(".slider");
const $progress = document.querySelector(".progress");
const $$buttons = document.querySelectorAll(".slider-buttons button");

let currentCardIdx = 0;
const cardTotal = 5;
handleSliderButtons();

$leftBtn.onclick = slideRight;
$rightBtn.onclick = slideLeft;

function handleSliderButtons() {
  if (currentCardIdx === 0) {
    $$buttons[0].disabled = true;
  } else if (currentCardIdx === cardTotal - 1) {
    $$buttons[1].disabled = true;
  } else {
    $$buttons[0].disabled = false;
    $$buttons[1].disabled = false;
  }
}

function slideRight() {
  if (currentCardIdx === 0) return;

  const $nextCard = $$cards[--currentCardIdx];
  $nextCard.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
  decreaseProgressBar();
  handleSliderButtons();
}

function slideLeft() {
  if (currentCardIdx === cardTotal - 1) return;

  const $nextCard = $$cards[++currentCardIdx];
  $nextCard.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
  increaseProgressBar();
  handleSliderButtons();
}

function increaseProgressBar() {
  const progressWidth = (currentCardIdx / (cardTotal - 1)) * 100;
  $progress.style.width = `${progressWidth}%`;
}

function decreaseProgressBar() {
  const progressWidth = (currentCardIdx / (cardTotal - 1)) * 100;
  $progress.style.width = `${progressWidth}%`;
}
