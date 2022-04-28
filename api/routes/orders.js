const express = require('express')
const route = express.Router()

route.get('/',(req,res,next)=>{
    
    res.status(200).json({
        message:'handling get requests in  orders '
    })
})



module.exports = route;