
const des = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(des);

const PI = 3.14;

function calculateCircumference(radius) {
    return 2 * PI * radius;
}

function calculateArea(radius) {
    return PI * radius * radius;
}
module.exports = {
    calculateCircumference,
    calculateArea
};


