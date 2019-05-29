'use strict'

import mongoose from 'mongoose'
import hongbaoData from '../../InitData/hongbao'

const Schema = mongoose.Schema;

const hongbaoSchema = new Schema({
    id: Number, //id
    sn: String, //识别码
    user_id: Number,//用户id
    amount: Number,//数量
    sum_condition: Number,//总和条件
    name: String,//名称
    phone: String,//电话
    begin_date: String,//开始日期
    end_date: String,//结束日期
    description_map: {
        phone: String,// "限收货手机号为 13681711254",
        online_paid_only:String,// "限在线支付使用",
        validity_delta: String,//"剩3日",
        validity_periods: String,//"2017-05-23到期",
        sum_condition: String,//"满 40 元可用"
    },
    limit_map: {},
    status: Number,
    present_status: Number,
    share_status: Number,
})
