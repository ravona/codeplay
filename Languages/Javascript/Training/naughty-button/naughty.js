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

unclickableButton.addEventListener("mouseover", updateOffset);


setInterval(updateOffset, 500);

