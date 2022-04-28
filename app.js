const express = require('express')
const products = require('./api/routes/products')
const orders = require('./api/routes/orders')
require('dotenv').config()
const app = express()

var bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true })
.then(() => {
    
    app.use('/products',products)

    
})
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    if (req.method == "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/orders',orders)

  
module.exports = app;

