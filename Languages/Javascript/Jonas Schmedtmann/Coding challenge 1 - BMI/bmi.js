let markHeight = 1.80;
let johnHeight = 1.60;

let markMass = 90;
let johnMass = 70;

function caculateBMI(mass, height) {
    return mass / (height * height);
}

caculateBMI(markMass, markHeight);
caculateBMI(johnMass, johnHeight);

if (caculateBMI(markMass, markHeight) > caculateBMI(johnMass, johnHeight)) {
    let isMarkHigherBMI = true;
    console.log(`Is Mark's BMI higher than John's? ${isMarkHigherBMI}`)
} else {
    let isMarkHigherBMI = false;
    console.log(`Is Mark's BMI higher than John's? ${isMarkHigherBMI}`)
}
