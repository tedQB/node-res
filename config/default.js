'use strict';

module.exports = {
    port:parseInt(process.env.PORT,10)||3000,
    url:'mongodb://localhost:27017/elem',
    session:{
        name:'SID',
        secret:'SID',
        cookie:{
            httpOnly:true,
            secure:false,
            maxAge:365 * 24 * 60 * 60 * 1000,
        }
    }
}
