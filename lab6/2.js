function compose(...fns) {
    const handlers = [];

    function run(x) {
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                x = fns[i](x);
            }
            return x;
        } catch (err) {
            for (const fn of handlers) {
                fn(err);
            }
        }
    }

    run.on = function (event, fn) {
        if (event === 'error') {
            handlers.push(fn);
        }
    };

    return run;
}

function check(x) {
    if (x < 0) {
        throw new Error('Число має бути невід’ємним');
    }
    return x;
}

const f = compose(x => x + 1, x => x * 2, check);
f.on('error', err => console.log(err.message));
console.log(f(5));
console.log(f(-1));
