'use strict';

import CategoryModel from '../../models/shopping/category'
import BaseComponent from '../../templates/baseComponent'
import DeliveryModel from '../../models/shopping/delivery'
import ActivityModel from '../../models/shopping/activity'


class Category extends BaseComponent{
    constructor(){
        super()
    }

    //获取所有餐馆分类和数量
    async getCategories(req, res, next){
        try{
            const categories = await CategoryModel.find({},'-_id');
            res.send(categories)

        }catch (err) {
            console.log('获取categories失败');
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取categories失败'
            })
        }
    }
    //添加分类
    async addCategory(req, res, next){
        try{
            await CategoryModel.addCategory(type)
        }catch (err) {
            console.log('增加category数量失败');
        }
    }

    async findById(id){
        try{
            const CateEntiry = await CategoryModel.findOne({'sub_categories.id':id})
            let categoName = CateEntiry.name;
            CateEntiry.sub_categories.forEach(item=>{
                if(item.id == id){
                    categoName += '/'+item.name;
                }
            })
            return categoName
        }catch (err) {
            console.log('通过category id获取数据失败')
            throw new Error(err)
        }
    }
    //获取配送方式
    async getDelivery(req, res, next){
        try{
            const deliveries = await DeliveryModel.find({}, '-_id');
            res.send(deliveries)
        }catch (err) {
            console.log('获取配送方式数据失败');
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取配送方式数据失败'
            })
        }
    }
    //获取活动列表
    async getActivity(req, res, next){
        try{
            const activities = await ActivityModel.find({}, '-_id');
            res.send(activities)
        }catch (err) {
            console.log('获取活动数据失败');
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取活动数据失败'
            })
        }
    }

}

export default new Category()


