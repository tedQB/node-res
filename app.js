import express from 'express';
import db from './mongodb/db.js';
//import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectMongo from 'connect-mongo'
import winston from 'winston';
import expressWinston from 'express-winston';

import history from 'connect-history-api-fallback';
import chalk from 'chalk';

const config = require('config-lite')(__dirname);

const app = express();

app.all("*",(req,res,next)=>{
  const { origin, Origin, referer, Referer} = req.header;
  const allowOrigin = origin || Origin ||referer || Referer || "*";
    res.header("Access-Control-Allow-Origin",allowOrigin);
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("X-Powered-By","Express");
    if(req.method=='OPTIONS'){
      res.sendStatus(200);
    }else{
      next();
    }

})


const MongoStore = connectMongo(session);
app.use(cookieParser());
console.log('config',config.session)
app.use(session({
  name:config.session.name,
  secret:config.session.secret,
  resave:true,//强制保存session 建议设置成false
  saveUninitialized:false,//强制保存未初始化的内容
  cookie:config.session.cookie, //保存时效
  store:new MongoStore({
    url:config.url //将session存储进数据库， 用来解决均衡负载的问题。
  })

}))

router(app);

app.use(history()); //解决前端直接在输入网址，404请求不到资源的问题。


app.use(express.static('./ls'+'public'))
//将静态文件目录设置为：项目根目录+/public

app.listen(config.port,()=>{
  console.log(
      chalk.green(`成功监听端口:${config.port}`)
  )
})


// var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', '');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
