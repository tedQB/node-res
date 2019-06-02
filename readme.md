
# About


饿了么APP nodejs-restful 接口项目

整个项目分为两部分：前台项目接口、后台管理接口，共60多个。
涉及登陆、注册、添加商品、商品展示、筛选排序、购物车、下单、用户中心等，构成一个完整的流程。

项目中package.json 的nodejs模块均为目前最新版，向后兼容，使用下来只有config-lite v2版本模块于v1版本区别较大之外，其余没有遇到很大问题。

特别感谢 bailicangdu 提供的nodejs+express 教程及项目


## 技术栈

nodejs + express + mongodb + mongoose + es6/7 + vue + element-ui


## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node (6.0 及以上版本)
2、mongodb (开启状态)
3、GraphicsMagick (裁切图片)
```

```

git clone git@github.com:tedQB/node-res.git  

cd node-res

npm install 或 yarn(推荐)

npm run dev

访问: http://localhost:3000

```


## API接口文档

## 项目布局

```
.
├── InitData                        初始化数据
│   ├── activity.js                 餐馆活动
│   ├── category.js                 餐馆分类
│   ├── cities.js                   城市列表
│   ├── delivery.js                 配送方式
│   ├── entry.js                    食品分类
│   ├── explain.js                  解释说明
│   ├── hongbao.js                  红包
│   ├── payments.js                 支付方式
│   ├── rate.js                     评论
│   └── remark.js                   备注列表
├── config                          运行配置
│   ├── default.js                  默认配置
│   └── development.js              开发环境
├── controller                      处理中心，负责路由及数据库的具体操作
│   ├── admin
│   │   └── admin.js                管理员
│   ├── bos
│   ├── eus
│   ├── member
│   │   └── vipcart.js              会员卡
│   ├── payapi
│   ├── promotion
│   │   └── hongbao.js              红包
│   ├── shopping
│   │   ├── category.js             餐馆分类
│   │   ├── food.js                 食品
│   │   └── shop.js                 餐馆
│   ├── statis
│   │   └── statis.js               数据统计
│   ├── ugc
│   │   └── rating.js               评论
│   ├── v1
│   │   ├── address.js              收获地址
│   │   ├── captchas.js             验证码
│   │   ├── carts.js                购物车
│   │   ├── cities.js               城市列表
│   │   ├── order.js                订单
│   │   ├── remark.js               备注
│   │   └── search.js               搜索
│   ├── v2
│   │   ├── entry.js                食品分类
│   │   └── user.js                 用户信息
│   ├── v3
│   │   └── explain.js              解析说明
│   └── v4
├── logs                            日志文件
├── middlewares                     中间件
│   ├── check.js                    权限验证    
│   └── statistic.js                API数据统计
├── models                          模型(数据库)
│   ├── admin
│   │   └── admin.js                管理员模型
│   ├── bos
│   │   └── order.js                订单模型
│   ├── eus
│   ├── ids.js
│   ├── member
│   ├── payapi
│   ├── promotion
│   │   └── hongbao.js              红包模型
│   ├── shopping
│   │   ├── activity.js             餐馆活动模型
│   │   ├── category.js             餐馆分类模型
│   │   ├── delivery.js             配送方式模型
│   │   ├── food.js                 食品模型
│   │   └── shop.js                 餐馆模型
│   ├── statis
│   │   └── statis.js               数据统计模型
│   ├── ugc
│   │   └── rating.js               评论模型
│   ├── v1
│   │   ├── address.js              收获地址模型
│   │   ├── cart.js                 购物车模型
│   │   ├── cities.js               城市列表模型
│   │   ├── payments.js             付款方式模型
│   │   └── remark.js               备注模型
│   ├── v2
│   │   ├── entry.js                食品分类模型
│   │   ├── user.js                 用户模型
│   │   └── userInfo.js             用户信息模型
│   ├── v3
│   │   └── explain.js              解释说明模型
│   └── v4
├── mongodb                         连接数据库
│   └── db.js
├── prototype                       基础功能Class
│   ├── addressComponent.js         与腾讯、百度地图API相关的Class
│   └── baseComponent.js            底层类
├── public                          静态资源目录
├── routes                          路由配置
│   ├── admin.js                    管理员
│   ├── bos.js                      订单
│   ├── eus.js                      用户
│   ├── index.js                    路由配置主文件
│   ├── member.js                   会员卡
│   ├── payapi.js                   付款
│   ├── promotion.js                红包
│   ├── shopping.js                 餐馆、食品、Menu
│   ├── statis.js                   数据统计
│   ├── ugc.js                      评论
│   ├── v1.js                       城市、用户、收获地址
│   ├── v2.js                       登陆、退出
│   ├── v3.js                       解释说明
│   └── v4.js                       餐馆
├── screenshots                     项目截图
├── views   
├── .babelrc 
├── .gitignore
├── API.md                          接口文档
├── app.js                          基础配置
├── COPYING                         GPL协议
├── index.js                        入口文件
├── package.json
├── README.md                  
.
```

# 感受

1. node特点

* 它是一个Javascript运行环境，依赖于Chrome V8引擎进行代码解释

* 事件驱动

* 非阻塞I/O

* 轻量、可伸缩，适于实时数据交互应用

* 单进程，单线程

2. 开发体验

* nodejs 对比其他后端开发体系，如Python，PHP等，在restful-api开发上胜出一筹，但是和mysql结合开发不如上述两者来的快。

* 代码复杂度上，nodejs要高于后面两者。

* React/Vue + nodejs express架构上，前端一套router配置，后端一套router配置的架构方法已经成为主流
   但nodejs用来做后端肯定不会成为主流，原因是nodejs本身存在很多问题。
   比如后端一个control调用必须try..catch, npm包质量不齐，一个小项目都几百兆的node_modules
   api如果返回不到想要的结果，要从前端查到后端然后查到数据库，开发效率不敢保证。
   

3. 适合NodeJS的场景

* RESTful API

这是NodeJS最理想的应用场景，结合非关系型数据库mongodb,moogose的Schema能够快速设计出前端想要的jsonp接口。
其他语言如果用mysql还要拼装数据。。

* 统一Web应用的UI层

适合服务端渲染，前端后端全部都用js的项目，在Next.js等服务端渲染框架使用。

* 大量Ajax请求的应用

用来做前后端分离，后端只提供数据，然后所有的关键业务逻辑都封装成REST调用，上层只需要考虑如何用这些REST接口构建具体的应用。

总而言之，NodeJS适合运用在高并发、I/O密集、少量业务逻辑的场景。

4. 缺点，不适合地方

* 不适合CPU密集型应用；CPU密集型应用给Node带来的挑战主要是：
  由于JavaScript单线程的原因，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起；

　　　　解决方案：分解大型运算任务为多个小任务，使得运算能够适时释放，不阻塞I/O调用的发起；

* 只支持单核CPU，不能充分利用CPU

* 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃

　　　　原因：单进程，单线程

* 解决方案：（1）Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；

　　　　　　　　　（2）开多个进程监听同一个端口，使用cluster模块；

* 开源组件库质量参差不齐，更新快，向下不兼容

* Debug不方便，错误没有stack trace
