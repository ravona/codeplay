const unclickableButton = document.querySelector('.unclickable');

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setRandomOffset() {
    return {
        x: getRandomIntInRange(0, 75),
        y: getRandomIntInRange(0, 75)
    }
}

function updateOffset() {
    const offset = setRandomOffset();
    unclickableButton.style.left = offset.x + "%";
    unclickableButton.style.top = offset.y + "%";
}

function changeBackgroundColor() {
    unclickableButton.style.backgroundColor = "crimson";
}

unclickableButton.addEventListener("mouseover", updateOffset);
unclickableButton.addEventListener("click", changeBackgroundColor);


setInterval(updateOffset, 500);

