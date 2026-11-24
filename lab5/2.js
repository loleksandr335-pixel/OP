function array() {
    const items = [];

    function get(i) {
        return items[i];
    }

    get.push = function (value) {
        items.push(value);
    };

    get.pop = function () {
        return items.pop();
    };

    return get;
}

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0), arr(1), arr(2));
console.log(arr.pop(), arr.pop(), arr.pop(), arr.pop());
