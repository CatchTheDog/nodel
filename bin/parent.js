/**
 * IPC通信：
 * Inter-Process Communication 即进程间通信。
 * 进程间通信的目的是让不同的进程之间能够互相访问资源并协调工作。
 * 主进程在创建子进程之前，会创建IPC通道并监听它，然后才创建子进程，并通过环境变量告诉子进程IPC通道的文件描述符。
 * 子进程在启动过程中，会根据文件描述符去连接这个已经存在的IPC通道，从而完成父子进程间的连接。
 */
const cp = require('child_process');
const n = cp.fork(__dirname + '/sub.js');
//message 事件实现收听子进程发来的数据
n.on('message', function (m) {
    console.log('PARENT got message:', m);
});
//send方法用于主从进程之间互相发送消息
n.send({hello: 'world'});
//因为IPC通信主从进程通信会使用文件描述符，为消除文件描述符的限制，使用send方法还可以发送句柄。
//child.send(message,[sendHandle]);