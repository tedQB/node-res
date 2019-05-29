'use strict'

import mongoose from 'mongoose'
import paymentsData from '../../InitData/payments'

const Schema = mongoose.Schema;

const paymentsSchema = new Schema({//订单
    description: String,
    disabled_reason: String, //取消原因
    id: Number,//id
    is_online_payment: Boolean,//在线支付
    name: String,
    promotion: [],
    select_state: Number,//选择状态
})

const Payments = mongoose.model('Payments',paymentsSchema);

Payments.findOne((err, data)=>{
    if(!data){
        paymentsData.forEach(item=>{
            Payments.create(item);
        })
    }
})

export default Payments
