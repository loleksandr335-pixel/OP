const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 0, '', true, 3.5, [], {}, undefined];
const count = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0 };

for (const item of arr) {
    const type = typeof item;
    count[type] += 1;
}

console.log(count);

const types = {};

for (const item of arr) {
    const type = typeof item;
    if (types[type] === undefined) {
        types[type] = 0;
    }
    types[type] += 1;
}

console.log(types);
