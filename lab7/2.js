function removeElements(arr, ...items) {
    const left = arr.filter(item => !items.includes(item));
    arr.length = 0;
    arr.push(...left);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
removeElements(arr, 5, 1, 6);
console.log(arr);
