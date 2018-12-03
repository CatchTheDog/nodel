const fork = require('child_process').fork;
const cpus = require('os').cpus();
const server = require('net').createServer();
server.listen(1337);
let workers = {};
let createWorker = function () {
    let worker = fork(__dirname + "/worker.js");
    //所有子进程退出时重新启动新的进程
    worker.on('exit', function () {
        console.log(`Worker ${worker.pid} exited.`);
        delete worker[worker.pid];
        createWorker();
    });
    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log('Create woker.pid: ' + worker.pid);
};

for (let i = 0; i < cpus.length; i++) {
    createWorker();
}
/**
 * 主进程自己退出时，让所有工作进程退出
 */
process.on('exit', function () {
    for (let pid in workers) {
        workers[pid].kill(); //这里不会触发 子进程 exit事件吗？  kill方法向指定的进行发送 SIGTERM 信号
    }
});
