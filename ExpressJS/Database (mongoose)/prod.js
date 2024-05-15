const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connection open!')
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        offline : {
            type: Number,
            default: 0
        }
    }

})

const Product = mongoose.model('Product', productSchema)
// const bike = new Product({ name: 'Gloves', price: 80, categories: ['Riding'], qty: {} })
// bike.save()
    // .then(data => {
    //     console.log('worked')
    //     console.log(data)
    // })
    // .catch(err => {
    //     console.log('didnt work')
    //     console.log(err)
    // }) 
//Product.findOneAndUpdate({name: 'Gloves'}, {price: -77}, {new: true, runValidators: true})     runValidators is needed to keep them working
Product.findOneAndUpdate({name: 'Gloves'}, {price: 77}, {new: true, runValidators: true})
.then(data => {
    console.log('worked')
    console.log(data)
})
.catch(err => {
    console.log('didnt work')
    console.log(err)
})