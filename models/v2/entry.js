'use strict';

import mongoose from 'mongoose'
import entryData from '../../InitData/entry'

const Schema = mongoose.Schema;

//进店铺展示内容
const entrySchema = new Schema({
    id: Number, //id
    is_in_serving: Boolean,//营业中
    description: String,//描述
    title: String,//title
    link: String,
    image_url: String,
    icon_url: String,
    title_color: String
});

const Entry = mongoose.model('Entry',entrySchema)

Entry.findOne((err,data)=>{
    if(!data){
        for(let i=0;i<entryData.length;i++){
            Entry.create(entryData[i])
        }
    }
})

export default Entry
