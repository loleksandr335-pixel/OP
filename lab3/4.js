function info(iface) {
    const arr = [];
    for (const key of Object.keys(iface)) {
        const fn = iface[key];
        if (typeof fn === 'function') {
            arr.push([key, fn.length]);
        }
    }
    return arr;
}

const iface = {
    m1(x) {
        return [x];
    },
    m2(x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    n: 5,
};

console.log(info(iface));
