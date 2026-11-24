function difference(a, b) {
    return a.filter(item => !b.includes(item));
}

console.log(difference([7, -2, 10, 5, 0], [0, 10]));
