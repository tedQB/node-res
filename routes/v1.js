'use strict'

import express from 'express'
import CityHandle from '../controller/v1/cities'



const router = express.Router();

router.get('/cities',CityHandle.getCity);
router.get('/cities/:id',CityHandle.getCityById);
router.get('/exactaddress',CityHandle.getExactAddress);

export default router
