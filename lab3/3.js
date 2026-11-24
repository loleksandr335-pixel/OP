function ipToNum(ip = '127.0.0.1') {
    const parts = ip.split('.');
    return parts.reduce((num, part) => {
        return (num << 8) + Number(part);
    }, 0);
}

console.log(ipToNum());
console.log(ipToNum('10.0.0.1'));
console.log(ipToNum('192.168.1.10'));
