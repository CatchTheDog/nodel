// Node.js，Stream 有四种流类型：
// Readable - 可读操作。
// Writable - 可写操作。
// Duplex - 可读可写操作.
//     Transform - 操作被写入数据，然后读出结果。
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。

//管道流
//链式流


//nodejs 模块
//exports/module.exports = ....;
//require('...');


//nodejs路由
// url 和querystring模块
const http = require('http');
const url = require('url');
    //                     url.parse(string).query
    //                                         |
    //         url.parse(string).pathname      |
    //                     |                   |
    //                     |                   |
    //                     ------ -------------------
    // http://localhost:8888/start?foo=bar&hello=world
    //                                 ---       -----
    //                                 |          |
    //                                 |          |
    //                 querystring.parse(queryString)["foo"]
    //                                             |
    //                                             querystring.parse(queryString)["hello"]


//nodejs 全局对象 global
console.log(__filename);//当前执行的脚本文件名（绝对路径）。
console.log(__dirname);//表示当前执行脚本所在目录
//setTimeout(cb,ms);
//clearTimeout(t);
//setInterval(cb, ms)
//clearInterval(t)
//console
//process  它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。
//  process事件：exit
//              beforeExit
//              uncaughtException
//              Signal  当进程接收到信号时就触发


//nodejs util模块  inherit/inspect/isArray/isRegExp/isDate/isError

//nodejs 工具模块

// 序号	模块名 & 描述
// 1	OS 模块   提供基本的系统操作函数。
// 2	Path 模块 提供了处理和转换文件路径的工具。
// 3	Net 模块  用于底层的网络通信。提供了服务端和客户端的的操作。
// 4	DNS 模块  用于解析域名。
// 5	Domain 模块   简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。

//nodejs是以单线程的模式运行的，但它使用的是事件驱动来处理并发。
//每个子进程带有三个流对象：child.stdin, child.stdout 和child.stderr  它们共享父进程stdio流。
//nodejs 提供child_process模块来创建子进程，方法有：
// exec - child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
// spawn - child_process.spawn 使用指定的命令行参数创建新进程。
// fork - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。
//         与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

//获取网络接口
const os = require('os');
let networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

//nodejs网络模块
const net = require('net');

//nodejs domain模块
const domain = require('domain');
const EventEmitter = require('events').EventEmitter;
const emitter1 = new EventEmitter();
const domain1 = domain.create();

domain1.on('error',function (err) {
    console.log('domain1 处理这个错误(' + err.message+")");
});
//显示绑定
domain1.add(emitter1);
emitter1.on('error',function (err) {
    console.log('监听器处理此错误('+err.message+')');
});
emitter1.emit('error',new Error('通过监听器处理'));