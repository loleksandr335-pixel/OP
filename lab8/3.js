function isType(value, type) {
    if (type === Object) {
        return value !== null && typeof value === 'object';
    }
    if (value instanceof type) {
        return true;
    }
    return typeof value === type.name.toLowerCase();
}

function contract(fn, ...types) {
    const last = types.length - 1;

    return function (...args) {
        if (args.length !== last) {
            throw new TypeError('Неправильна кількість аргументів');
        }

        for (let i = 0; i < last; i++) {
            if (!isType(args[i], types[i])) {
                throw new TypeError('Неправильний тип аргументу');
            }
        }

        const res = fn(...args);
        if (!isType(res, types[last])) {
            throw new TypeError('Неправильний тип результату');
        }
        return res;
    };
}

const add = contract((a, b) => a + b, Number, Number, Number);
const concat = contract((a, b) => a + b, String, String, String);
console.log(add(2, 3));
console.log(concat('Hello ', 'world!'));
