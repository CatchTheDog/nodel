//nodejs是单进程单线程应用程序，引擎提供异步执行回调接口，可以处理大量并发，性能很高。
const events = require('events');
const eventEmitter = new events.EventEmitter();
let connectHandler = function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function () {
    console.log('数据接收成功!');
});
eventEmitter.emit('connection');
console.log('程序执行完毕!');