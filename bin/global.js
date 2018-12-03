console.log(__dirname);
console.log(__filename);
const {URL} = require("url");
const myUrl = new URL('/foo', 'https://example.org/');
console.log(myUrl);