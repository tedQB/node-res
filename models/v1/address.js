'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//个人收获地址模型
const addressSchema = new Schema({
    id: Number, //id
    address: String,//地址
    phone: String,//电话
    user_id: Number,//用户id
    is_valid: {//可用
        type: Number,
        default: 1
    },
    created_at: {//创建时间
        type: Date,
        default: Date.now()
    },
    phone_bk: String,//备用电话
    tag_type: Number,//
    name: String,
    st_geohash: String,
    address_detail: String,//详细地址
    poi_type: {//
        type: Number,
        default: 0
    },
    sex: {//性别
        type: Number,
        default: 1
    },
    city_id: {//城市id
        type: Number,
        default: 1
    },
    tag: {//地址tag
        type: String,
        default: '家'
    },
    is_user_default: {//默认地址
        type: Boolean,
        default: true
    },
    is_deliverable: {//可到达
        type: Boolean,
        default: true
    },
    agent_fee: {//免单
        type: Number,
        default: 0
    },
    deliver_amount: {//快递数量
        type: Number,
        default: 0
    },
    phone_had_bound: {//
        type: Boolean,
        default: true
    },
})

addressSchema.index({id:1})

const Address = mongoose.model('Address',addressSchema);

export default Address
