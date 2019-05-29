'use strict';

import mongoose from 'mongoose'

const shopSchema = new mongoose.Schema({
    activities: [{ //店铺活动
        description: String,
        icon_color: String,
        icon_name: String,
        id: Number,
        name: String,
    }],
    address: String, //地址
    delivery_mode: { //快递方式
        color: String,
        id: Number,
        is_solid: Boolean,
        text: String
    },
    description: { //店铺描述
        type: String,
        default: ""
    },
    order_lead_time: {
        type: String,
        default: ""
    },
    distance: {//距离
        type: String,
        default: ""
    },
    location: {//位置
        type: [Number],
        index: '2d'
    },
    float_delivery_fee: { //快递费
        type: Number,
        default: 0
    },
    float_minimum_order_amount: { //最小订单
        type: Number,
        default: 0
    },
    id: Number,
    category: String,
    identification: { //店铺身份识别
        company_name: { //公司名称
            type: String,
            default: ""
        },
        identificate_agency: {//鉴定中介
            type: String,
            default: ""
        },
        identificate_date: { //鉴定时间
            type: Date,
            default: Date.now
        },
        legal_person: {//法人
            type: String,
            default: ""
        },
        licenses_date: {//许可证日期
            type: String,
            default: ""
        },
        licenses_number: {//许可证号码
            type: String,
            default: ""
        },
        licenses_scope: {//许可证范围
            type: String,
            default: ""
        },
        operation_period: {//经营范围
            type: String,
            default: ""
        },
        registered_address: {//注册地点
            type: String,
            default: ""
        },
        registered_number: {//注册号码
            type: String,
            default: ""
        },
    },
    image_path: {
        type: String,
        default: ""
    },
    is_premium: {//高级店铺
        type: Boolean,
        default: false
    },
    is_new: {//新店铺
        type: Boolean,
        default: false
    },
    latitude: Number,
    longitude: Number,
    license: {//许可证
        business_license_image: {//营业许可证图片
            type: String,
            default: ""
        },
        catering_service_license_image: {//餐饮许可证图片
            type: String,
            default: ""
        },
    },
    name: {
        type: String,
        required: true
    },
    opening_hours: {//营业时间
        type: Array,
        default: ["08:30/20:30"]
    },
    phone: {//电话
        type: String,
        required: true
    },
    piecewise_agent_fee: {//限时免费
        tips: String
    },
    promotion_info: {//促销提示
        type: String,
        default: "欢迎光临，用餐高峰请提前下单，谢谢"
    },
    rating: {//评价
        type: Number,
        default: 0
    },
    rating_count: {//评价数目
        type: Number,
        default: 0
    },
    recent_order_num: {//近期订单
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 0
    },
    supports: [{
        description: String,
        icon_color: String,
        icon_name: String,
        id: Number,
        name: String
    }],
});

shopSchema.index({id:1});

const Shop = mongoose.model('Shop',shopSchema);

export default Shop
