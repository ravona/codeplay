const unclickableButton = document.querySelector('.unclickable');
let counter = 1;

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setOffset(left, top) {
    return {
        x: left,
        y: top
    }
}

function setRandomOffset(a, b) {
    if (getRandomIntInRange(1, 3) === 1) {
        return {
            x: getRandomIntInRange(0, 50),
            y: getRandomIntInRange(0, 50)
        }
    } else {
        return {
            x: getRandomIntInRange(50, 75),
            y: getRandomIntInRange(50, 75)
        }
    }
}

function positionReset() {
    const reset = setOffset(25, 25);
    unclickableButton.style.left = reset.x + "%";
    unclickableButton.style.top = reset.y + "%";
}

function handleOffset() {
    console.log(counter);
    counter++;

    if (counter === 5) {
        counter = 1;
        positionReset();

    } else {
        updateOffset();
    }
}

function updateOffset() {
    const offset = setRandomOffset(2, 3);
    unclickableButton.style.left = offset.x + "%";
    unclickableButton.style.top = offset.y + "%";
}

unclickableButton.addEventListener("mouseover", handleOffset);


setInterval(handleOffset, 500);

