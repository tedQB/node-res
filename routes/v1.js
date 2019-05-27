'use strict'

import express from 'express'
import CityHandle from '../controller/v1/cites'



const router = express.Router();
router.get('/cities',CityHandle);
