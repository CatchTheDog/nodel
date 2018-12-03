const cp = require('child_process');
const child1 = cp.fork('child_1.js');
const child2 = cp.fork('child_1.js');
const server = require('net').createServer();
server.listen(1337, function () {
    child1.send('server', server);
    child2.send('server', server);
    server.close(); //将server句柄发送给子进程后，关闭主进程对端口1337的监听
});