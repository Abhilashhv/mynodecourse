const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf-8');
console.log(first);
const second = readFileSync('./content/second.txt','utf-8');
console.log(second);
writeFileSync('./content/third.txt',`Result:${first} ${second}`,{flag:'a'});