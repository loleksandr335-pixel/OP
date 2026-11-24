function pipe(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('Потрібна функція');
        }
    }

    return function (x) {
        for (const fn of fns) {
            x = fn(x);
        }
        return x;
    };
}

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc, twice, cube)(5));
console.log(pipe(inc, inc)(7));
