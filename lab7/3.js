function unique(arr) {
    return [...new Set(arr)];
}

console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(['top', 'bottom', 'top', 'left']));
