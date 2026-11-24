const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Anna', phone: '+380445550101' },
    { name: 'Ivan', phone: '+380445550102' },
];

const findPhoneByName = (name) => {
    for (const p of phonebook) {
        if (p.name === name) return p.phone;
    }
};

console.log(findPhoneByName('Marcus Aurelius'));

module.exports = { findPhoneByName, phonebook };
