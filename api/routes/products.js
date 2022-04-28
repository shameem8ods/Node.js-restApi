const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const Product = require('../routes/model/product')

route.get('/',(req,res,next)=>{
    Product.find({}, function (err, users) {
        res.send(users);
    });
    
})

route.post('/',(req,res,next)=>{
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price:req.body.price
    })
    product.save().then(result=>{
        console.log(result)
    }).catch(error=>{
        console.log(error)
    })
    res.status(200).json({
        message:'handling post requests in products route',
        createdProduct:product
    })
})

route.get('/:productId',(req,res,next)=>{
    const id = req.params.productId
    Product.findById(id).exec().then(result=>{
        console.log(result)
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

route.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId
    Product.remove({_id:id}).exec().then(result=>{
        console.log(result)
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

    route.patch('/:productId',(req,res,next)=>{
        const id = req.params.productId
        Product.updateOne({_id:id},{$set:{name:req.body.name,price:req.body.price}}).exec().then(result=>{
            console.log(result)
            res.status(200).json(result)
        }).catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
    
})

module.exports = route;