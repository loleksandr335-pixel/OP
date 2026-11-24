function average(a, b) {
    return (a + b) / 2;
}

const square = (x) => x * x;

const cube = (x) => x ** 3;

function calculate() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(average(square(i), cube(i)));
    }
    return arr;
}

console.log(calculate());

module.exports = { average, square, cube, calculate };
