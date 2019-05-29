'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
//购物车模型
const cartSchema = Schema({
    id: Number,
    cart: {
        id: Number,
        groups: [
            [{ //购物车组
                attrs: [],
                extra: [],
                id: Number,
                new_specs: [],//新规则
                name: String,//
                price: Number,//价格
                quantity: Number,//数量
                specs: [String],//规格
                packing_fee: Number,
                sku_id: Number,
                stock: Number,
            }]
        ],
        extra: [{
            description: String,
            name: {
                type: String,
                default: '餐盒'
            },
            price: {
                type: Number,
                default: 0
            },
            quantity: {
                type: Number,
                default: 0
            },
            type: {
                type: Number,
                default: 0
            },
        }],
        deliver_amount: Number,//快递数量
        deliver_time: String,//投递时间
        discount_amount: String,//折扣数量
        dist_info: String,//距离信息
        is_address_too_far: {//距离太远
            type: Boolean,
            default: false
        },
        is_deliver_by_fengniao: Boolean,//蜂鸟转送
        is_online_paid: {//在线支付
            type: Number,
            default: 1
        },
        is_ontime_available: {//准时宝
            type: Number,
            default: 0
        },
        must_new_user: {//新用户
            type: Number,
            default: 0
        },
        must_pay_online: {//必须在线支付
            type: Number,
            default: 0
        },
        ontime_status: {//在线状态
            type: Number,
            default: 0
        },
        ontime_unavailable_reason: String,//不准时原因
        original_total: Number,
        phone: String,
        promise_delivery_time: {//准时时间
            type: Number,
            default: 0
        },
        restaurant_id: Number,//餐馆id
        restaurant_info: Schema.Types.Mixed,//餐馆信息
        restaurant_minimum_order_amount: Number,//餐馆最小订单
        restaurant_name_for_url: String,//餐馆url
        restaurant_status: {//餐馆状态
            type: Number,
            default: 1
        },
        service_fee_explanation: {//餐馆免单原因
            type: Number,
            default: 0
        },
        total: Number,
        user_id: Number,
    },
    delivery_reach_time: String,//快递达到时间
    invoice: {//发票
        is_available: {
            type: Boolean,
            default: false
        },
        status_text: String,
    },
    sig: String,
    current_address: {},
    payments: [{//付款
        description: String,//说明
        disabled_reason: String,//disabled原因
        id: Number,
        is_online_payment: {//在线支付
            type: Boolean,
            default: true
        },
        name: String,
        promotion: [],
        select_state: Number,//
    }],
    deliver_times: [],//投递时间
    deliver_times_v2: [],
    merchant_coupon_info: {},
    number_of_meals: {},
    discount_rule: {},
    hongbao_info: {},//红包
    is_support_coupon: {//支持优惠？
        type: Boolean,
        default: false
    },
    is_support_ninja: {
        type: Number,
        default: 1
    },
})


cartSchema.index({id:1})

const Cart = mongoose.model('Cart',cartSchema)

export default Cart


