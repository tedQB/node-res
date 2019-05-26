/*
* babel-register字面意思能看出来，这是babel的一个注册器，
* 它在底层改写了node的require方法，引入babel-register之后所有require
* 并以.es6, .es, .jsx 和 .js为后缀的模块都会经过babel的转译。
* */
require('babel-core/register')

require('./app.js')
