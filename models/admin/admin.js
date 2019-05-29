'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    user_name:String,
    password:password,
    id:Number,
    create_time:String,
    admin:{
        type:String,
        default:'管理员'
    },
    status:Number,//
    avator:{
        type:String,
        default:'default.jpg'
    },
    city:String,
})

adminSchema.index({id:1})

const Admin = mongoose.model('Admin',adminSchema);

export default Admin
