const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')
const {categories} = require('./constants')
const AppError = require('./AppError')

const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log('Mongo Connection open!')
    })
    .catch(err => {
        console.log('oh no error')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/products', async (req, res) => {
    const {category} = req.query
    if (category) {
        const products = await Product.find({category})
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
   
})

app.get('/products/new', (req, res) => {
    // res.render('products/new', {categories})
    throw new AppError('Invalid invalid', 401)
})

app.post('/products',async (req, res) => {
    //console.log(req.body)
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findById(id)
    // console.log(product)
    if (!product) {
        next(new AppError('Product not found', 404))
    }
    res.render('products/details', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) =>{
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.use((err, req, res, next) => {
    const {status = 500, message = 'ERROR'} = err
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('Listening on 3000')
})