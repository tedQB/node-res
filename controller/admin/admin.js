'use strict';

import AdminModel from '../../models/admin/admin'
import AddressComponent from '../../templates/addressComponent'
import crypto from 'crypto'
import formidable from 'formidable'
import dtime from 'time-formater'

class Admin extends AddressComponent{
    constructor(){
        super()

    }
    async login(){

    }

    async register(){

    }

    async singout(){

    }

    async getAllAdmin(){

    }

    async getAdminCount(){

    }

    async getAdminInfo(){


    }

    encryption(password){
        const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
        return newpassword
    }
    Md5(password){
        const md5 = crypto.createHash('md5');
        return md5.update(password).digest('base64');
    }
}

export default new Admin()
