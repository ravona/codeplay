const unclickableButton = document.querySelector(".unclickable");

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOffset() {
  return {
    x: getRandomIntInRange(0, 75),
    y: getRandomIntInRange(0, 75),
  };
}

function updateOffset() {
  const offset = getRandomOffset();
  unclickableButton.style.left = offset.x + "%";
  unclickableButton.style.top = offset.y + "%";
}

function changeBackgroundColor(color) {
  unclickableButton.style.backgroundColor = color;
}

unclickableButton.addEventListener("mouseover", updateOffset);
unclickableButton.addEventListener("click", changeBackgroundColor("crimson"));

setInterval(updateOffset, 500);
