function max(arr) {
    let big = -Infinity;
    for (const row of arr) {
        for (const n of row) {
            if (n > big) {
                big = n;
            }
        }
    }
    return big;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
