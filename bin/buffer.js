//javascript没有二进制数据类型，所以node定义了Buffer用于存放二进制数据。
//官方建议使用Buffer.from()接口创建Buffer对象
//nodejs目前支持的字符编码包括：ascii utf8 base64 hex binary
//创建
let buf_1 = Buffer.from('buffer','ascii');
let buf_2 = Buffer.alloc(10);
let buf_3 = Buffer.alloc(10,1);
let buf_4 = Buffer.allocUnsafe(10);
let buf_5 = Buffer.from([1,2,3,4]);
let buf_6 = Buffer.from(buf_5,3);
let buf_7 = Buffer.from(buf_6);
console.log(buf_5.toString());
//读写
let buf_8 = Buffer.alloc(256);
let len = buf_8.write('www.baidu.com',0,50,'utf8');
console.log(len);
console.log(buf_8.toString());
console.log(buf_8.toString('utf8',5,10));
//toJson
let buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
let json = JSON.stringify(buf);
console.log(json);
console.log(buf.toJSON());
let copy = JSON.parse(json,(key,value) =>{
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);
