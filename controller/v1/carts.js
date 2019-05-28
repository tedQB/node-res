'use strict';


import AddressComponent from "../../templates/addressComponent";
import formidable from 'formidable'
import PaymentsModel from ''


class Carts extends AddressComponent{

    constructor(){
        super();
        this.extra = [{
            description:'',
            name:'餐盒',
            price:0,
            quantity: 1,
            type:0
        }]
        this.checkout = this.checkout.bind(this);
    }
    async checkout(req, res, next){
        const UID = req.sessionID;
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files)=>{
            const {come_from, geohash, entities = [], restaurant_id } = fields;
            try {
                if(!(entities instanceof Array)||!entities.length){
                    throw new Error('entities参数错误')
                }else if(!(entities[0] instanceof Array)||!entities[0].length){
                    throw new Error('entitie 参数错误')
                }else if(!restaurant_id){
                    throw new Error('restaurant_id参数错误')
                }

            }catch(err){
                console.log(err);
                res.send({
                    status: 0,
                    type: 'ERROR_PARAMS',
                    message: err.message
                })
                return
            }
            let payments; //付款方式
            let cart_id; //购物车id
            let restaurant; //餐馆详情
            let deliver_time; //配送时间
            let delivery_reach_time; //到达时间
            let from = geohash.split(',')[0] + ',' +  geohash.split(',')[1];

            try{
                payments = await PaymentsModel.find({},'-id');
            }catch (e) {
                
            }


        })
    }

}
