function removeElement(arr, item) {
    const i = arr.indexOf(item);
    if (i !== -1) {
        arr.splice(i, 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
removeElement(arr, 5);
console.log(arr);
