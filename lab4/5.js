function sum(...args) {
    return args.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
