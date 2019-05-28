'use strict'

import express from 'express'
import CityHandle from '../controller/v1/cities'
import SearchPlace from '../controller/v1/search'
import BaseComponent from "../templates/baseComponent"
import Carts from '../controller/v1/carts'


const baseHanle = new BaseComponent()

const router = express.Router();

router.get('/cities',CityHandle.getCity);
router.get('/cities/:id',CityHandle.getCityById);
router.get('/exactaddress',CityHandle.getExactAddress);
router.get('/pois',SearchPlace.search);
router.post('/addimg:/type',baseHanle.uploadImg);
router.post('/carts/checkout');


export default router
