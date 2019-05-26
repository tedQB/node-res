require('babel-register')
var test = require('./test.js')

console.log(test.toString())

//写了一个使用Object.assign的代码如下：
const people = Object.assign({}, {
    name: 'shenfq'
});

console.log(people)

