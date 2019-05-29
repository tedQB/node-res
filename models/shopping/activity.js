'use strict';

import mongoose from 'mongoose'
import activityData from '../../InitData/acitivity'


const Schema = mongoose.Schema;

const acitivitySchema = new Schema({
    description: String,
    icon_color: String,
    icon_name:  String,
    id: Number,
    name:  String,
    ranking_weight: Number
})

acitivitySchema.index({index:1})

const Activity = mongoose.model('Activity', acitivitySchema);

Activity.findOne((err,data)=>{
    if(!data) {
        activityData.forEach(item=>{
            Activity.create(item);
        })
    }
})

export default Acitivity
