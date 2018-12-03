/**
 * @author Mr.x
 * @since 2018/12/3 9:32
 * @version 1.0.0
 * nodejs主从模式启动子进程四个方法：
 * spawn/exec/execFile/fork
 * spawn:执行命令，无回调，不可设置超时时间
 * exec:执行命令，有回调，可设置超时时间
 * execFile: 执行可执行文件，有回调，可设置超时时间
 * fork: 使用node命令执行JS文件，无回调异常处理，不可设置超时时间
 */
const fork = require("child_process").fork;
const cpus = require('os').cpus();
for (let i = 0; i < cpus.length; i++) {
    fork('./worker.js');
}