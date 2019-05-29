'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//用户模型
const userInfoSchema = new Schema({
    avatar: {//头像
        type: String,
        default: 'default.jpg'
    },
    balance: {//用户余额
        type: Number,
        default: 0
    },
    brand_member_new: {//品牌会员
        type: Number,
        default: 0
    },
    current_address_id: {//当前地址
        type: Number,
        default: 0
    },
    current_invoice_id: {//当前发票
        type: Number,
        default: 0
    },
    delivery_card_expire_days: {//订单过期时间
        type: Number,
        default: 0
    },
    email: {//邮箱
        type: String,
        default: ''
    },
    gift_amount: {//礼物数量
        type: Number,
        default: 3
    },
    city: String,
    registe_time: String,//注册事件
    id: Number,
    user_id: Number,//用户id
    is_active: {//活动
        type: Number,
        default: 1
    },
    is_email_valid: {//邮箱验证
        type: Boolean,
        default: false
    },
    is_mobile_valid: {//手机验证
        type: Boolean,
        default: true
    },
    mobile: {//手机号
        type: String,
        default: ''
    },
    point: {
        type: Number,
        default: 0
    },
    username: String,//名称
    column_desc: {//其他
        game_desc: {
            type: String,
            default: '玩游戏领红包'
        },
        game_image_hash: {
            type: String,
            default: '05f108ca4e0c543488799f0c7c708cb1jpeg'
        },
        game_is_show: {
            type: Number,
            default: 1
        },
        game_link: {
            type: String,
            default: 'https://gamecenter.faas.ele.me'
        },
        gift_mall_desc: {
            type: String,
            default: '0元好物在这里'
        },
    },
})


userInfoSchema.index({id: 1});


const UserInfo = mongoose.model('UserInfo', userInfoSchema);

export default UserInfo
