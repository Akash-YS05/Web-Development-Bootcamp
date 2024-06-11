const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log('Mongo Connection open!')
    })
    .catch(err => {
        console.log('oh no error')
        console.log(err)
    })

// const p = new Product({
//     name: 'grapefruit', 
//     price:120,
//     category: 'fruit'
//  })

//  p.save().then(p=>{
//     console.log(p)
//  }).catch(err=>{
//     console.log(err)
//  })

 const seedProducts = [
    {
        name: 'apple',
        price: 200,
        category: 'fruit'
    },
    {
        name: 'mango',
        price: 500,
        category: 'fruit'
    },
    {
        name: 'cabbage',
        price: 100,
        category: 'vegetable'
    },
    {
        name: 'milk',
        price: 120,
        category: 'dairy'
    },
 ]

Product.insertMany(seedProducts)
 .then(p => {
    console.log(p)
 })
 .catch(err => {
    console.log(err)
 })