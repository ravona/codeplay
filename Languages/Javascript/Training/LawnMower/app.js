'use strict';

let gameArea = document.querySelector('.gameArea');

let Game = {};

const init = function () {
    let matrix = [];
    for (let c = 0; c < this.cols; c++) {
        let cArray = [];
        for (let r = 0; r < this.rows; r++) {
            cArray.push(r);
        }
        matrix.push(cArray);
    }
    this.matrix = matrix;
};


const render = function (domElem) {
    for (let i = 0; i < this.matrix.length; i++) {
        let myRow = document.createElement("div");
        myRow.innerHTML = this.matrix[i].toString();
        domElem.appendChild(myRow);
    }
};

let map = {
    cols: 5,
    rows: 5,
    tileSize: 64,
    matrix: [],
    init: init,
    render: render
};

map.init();
console.log(gameArea);
map.render(gameArea);

class Player {
    constructor(location, orientation, steps) {
        this.location = location;
        this.orientation = orientation;
        this.steps = steps;
    }
}