const phonebook = {
    'Marcus Aurelius': '+380445554433',
    Anna: '+380445550101',
    Ivan: '+380445550102',
};

const book = { __proto__: null, ...phonebook };

const findPhoneByName = (name) => book[name];

console.log(findPhoneByName('Anna'));

module.exports = { findPhoneByName, phonebook };
