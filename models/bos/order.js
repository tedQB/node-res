'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    basket: {
        abandoned_extra: [{ //废弃订单
            category_id: Number,
            name: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
            quantity: {
                type: Number,
                default: 0
            },
        }],
        deliver_fee: {//快递费用
            category_id: {
                type: Number,
                default: 2
            },
            name: {
                type: String,
                default: '配送费'
            },
            price: {
                type: Number,
                default: 4
            },
            quantity: {
                type: Number,
                default: 1
            },
        },
        extra: [],
        group: [ //订单组
            [{
                attrs: [],
                new_specs: [],
                name: String,
                price: Number,
                quantity: Number,
                specs: [String]
            }]
        ],
        packing_fee: { //包装费用
            category_id: {
                type: Number,
                default: 1
            },
            name: {
                type: String,
                default: '餐盒'
            },
            price: Number,
            quantity: Number
        },
        pindan_map: [] //拼单
    },
    formatted_created_at: String,
    order_time: Number,
    time_pass: Number,
    id: Number,
    is_brand: {//商标
        type: Number,
        default: 0
    },
    is_deletable: {//可删除
        type: Number,
        default: 1
    },
    is_new_pay: {//新订单
        type: Number,
        default: 1
    },
    is_pindan: {//拼单
        type: Number,
        default: 0
    },
    operation_confirm: {//操作确认
        type: Number,
        default: 0
    },
    operation_pay: {//编辑费用
        type: Number,
        default: 0
    },
    operation_rate: {//编辑评价
        type: Number,
        default: 0
    },
    operation_rebuy: {//编辑重新买
        type: Number,
        default: 2
    },
    operation_upload_photo: {//编辑上传图片
        type: Number,
        default: 0
    },
    pay_remain_seconds: {//订单支付停留时间
        type: Number,
        default: 0
    },
    rated_point: {//评价点
        type: Number,
        default: 0
    },
    remind_reply_count: {//提醒评价
        type: Number,
        default: 0
    },
    restaurant_id: Number,//店铺id
    restaurant_image_hash: String,//店铺hash
    restaurant_image_url: String,//店铺图片
    restaurant_name: String,//餐馆名称
    restaurant_type: {//餐馆类型
        type: Number,
        default: 0
    },
    status_bar: {//状态栏
        color: String,
        image_type: String,
        sub_title: String,
        title: String,
    },
    status_code: {//状态码
        type: Number,
        default: 0
    },
    timeline_node: {//时间轴
        actions: [],
        description: String,
        in_processing: {
            type: Number,
            default: 0
        },
        sub_description: String,
        title: String,
    },
    top_show: {//
        type: Number,
        default: 0
    },
    total_amount: Number,
    total_quantity: Number,
    unique_id: Number,
    user_id: Number,
    address_id: Number,
})

orderSchema.index({id:1})

const Order = mongoose.model('Order',orderSchema);

export default Order;
