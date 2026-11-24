function seq(...fns) {
    return function (x) {
        if (typeof x === 'function') {
            return seq(...fns, x);
        }

        for (let i = fns.length - 1; i >= 0; i--) {
            x = fns[i](x);
        }
        return x;
    };
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
