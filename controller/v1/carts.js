'use strict';


import AddressComponent from "../../templates/addressComponent";
import formidable from 'formidable'
import PaymentsModel from '../../models/v1/payments'
import ShopModel from '../../models/shopping/shop'
import CartModel from '../../models/v1/cart'


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
    //post 所选商品加入购物车
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
                payments = await PaymentsModel.find({}, '-_id'); //查找订单
                cart_id = await this.getId('cart_id'); //购物车id
                restaurant = await ShopModel.findOne({id: restaurant_id});//店铺id
                const to = restaurant.latitude+ ',' + restaurant.longitude; //店铺坐标
                deliver_time = await this.getDistance(from, to, 'tiemvalue');//投递时间
                let time = new Date().getTime() + deliver_time*1000;
                let hour = ('0' + new Date(time).getHours()).substr(-2);
                let minute = ('0' + new Date(time).getMinutes()).substr(-2);
                delivery_reach_time = hour + ':' + minute;

            }catch (e) {
                console.log('获取数据数据失败', err);
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    message: '添加购物车失败',
                })
                return
            }
            const deliver_amount = 4;
            let price =0;
            entities[0].map(item=>{ //
                price += item.price * item.quantity;
                if (item.packing_fee) {
                    this.extra[0].price += item.packing_fee*item.quantity;
                }
                if (item.specs[0]) {
                    return item.name = item.name + '-' + item.specs[0];
                }
            })
            //食品总价格
            const total = price + this.extra[0].price * this.extra[0].quantity + deliver_amount;
            //是否支持发票
            let invoice = {
                is_available: false,
                status_text: "商家不支持开发票",
            };
            restaurant.supports.forEach(item => {
                if (item.icon_name == '票') {
                    invoice = {
                        is_available: true,
                        status_text: "不需要开发票",
                    };
                }
            })

            const checkoutInfo = { //订单详情
                id:cart_id, //购物车id
                cart:{
                    id: cart_id,
                    groups: entities,
                    extra: this.extra,
                    deliver_amount, //投递数量
                    is_deliver_by_fengniao: !!restaurant.delivery_mode, //蜂鸟转送
                    original_total: total, //总价
                    phone: restaurant.phone, //店铺手机号
                    restaurant_id,//店铺id
                    restaurant_info: restaurant, //店铺
                    restaurant_minimum_order_amount: restaurant.float_minimum_order_amount,
                    total,
                    user_id: UID,
                },
                delivery_reach_time, //到达时间
                invoice, //发票
                sig: Math.ceil(Math.random()*1000000).toString(),
                payments, //支付方式
            }
            try{
                const newCart = new CartModel(checkoutInfo);
            }catch (err) {
                console.log('保存购物车数据失败')
                res.send({
                    status:0,
                    type:'ERROR_TO_SAVE_CART',
                    message:'加入购物车失败'
                })
            }

        })
    }

}

export default new Carts()
