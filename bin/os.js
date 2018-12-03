const os = require('os');
console.log("EOL:" + os.EOL);
console.log("ARCH:" + os.arch());
console.log(JSON.stringify(os.constants));
os.cpus().forEach((e, i, a) => {
    console.log(`model:${e['model']};`);
    console.log(`speeed:${e['speed']};`);
    console.log(`user:${e['times']['user']};`);
    console.log(`nice:${e['times']['nice']};`);
    console.log(`sys:${e['times']['sys']};`);
    console.log(`idle:${e['times']['idle']};`);
    console.log(`irq:${e['times']['irq']};`);
});
console.log("endianness:" + os.endianness());
console.log("freemem:" + os.freemem);
console.log("homedir:" + os.homedir);
console.log("loadavg:" + os.loadavg());
console.log("hostname:" + os.hostname);

console.log(JSON.stringify(os.networkInterfaces()));