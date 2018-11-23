//每个事件支持若干个事件监听器，当事件触发时，注册到这个事件的事件监听器会被依次调用，事件参数作为回调函数的参数传递。
const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('newListener',function (event,listener) {
    console.log(`${event} add listener: ${listener}`);
});
eventEmitter.on('removeListener',function (event,listener) {
    console.log(`${event} remove listener: ${listener}`);
});
//为error事件设置了监听器，但是并没有对抛出的异常处理，为啥子？
eventEmitter.on('error',function (err) {
    console.log(`${err.name} throwed:${err.message}`);
});
eventEmitter.on('some_event',function (arg1,arg2) {
   console.log('listener1',arg1,arg2);
});
eventEmitter.on('some_event',function (arg1,arg2) {
    console.log('listener2',arg1,arg2);
});
eventEmitter.addListener('some_event',function (arg1,arg2) {
    console.log('listener3',arg1,arg2);
});
eventEmitter.once('some_event',function (arg1,arg2) {
    console.log('listener4只能触发依次，触发结束后直接解除。',arg1,arg2);
});
let removeListener = function(arg1,arg2){
  console.log('removeListener',arg1,arg2);
};
eventEmitter.on('some_event',removeListener);
eventEmitter.on('some_event',function () {
    throw new TypeError('Whoops!');
});
eventEmitter.emit('some_event','arg1参数','arg2参数');
eventEmitter.emit('some_event','arg1参数','arg2参数');
eventEmitter.removeListener('some_event',removeListener);
eventEmitter.emit('some_event','arg1参数','arg2参数');
console.log(events.EventEmitter.listenerCount(eventEmitter,'some_event'));