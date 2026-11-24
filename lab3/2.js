function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * characters.length);
        key += characters[pos];
    }
    return key;
}

const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, chars));
