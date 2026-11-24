function fn() {
    const a = { name: 'Іван' };
    let b = { name: 'Марія' };

    a.name = 'Олександр';
    b.name = 'Олена';
    console.log(a, b);

    b = { name: 'Анна' };
    console.log(b);
}

fn();

module.exports = { fn };
