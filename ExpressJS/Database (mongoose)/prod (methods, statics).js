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
        min: [0, 'must be positive']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L', 'XL']
    }

})

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
    //console.log('Hello there!! Good dayyy')
}
productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat)
    return this.save
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0})
}
const Product = mongoose.model('Product', productSchema)



const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike'})
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('outdoors')
    console.log(foundProduct)
}
// findProduct()

Product.fireSale().then(res => console.log(res))



// const bike = new Product({name: 'Tape', price: 20, categories: ['Riding'], qty: {}})
// bike.save()
// .then(data => {
//     console.log('worked')
//     console.log(data)
// })
// .catch(err => {
//     console.log('didnt work')
//     console.log(err)
// })



//Product.findOneAndUpdate({name: 'Gloves'}, {price: -77}, {new: true, runValidators: true})     runValidators is needed to keep them workin
// .then(data => {
//     console.log('worked')
//     console.log(data)
// })
// .catch(err => {
//     console.log('didnt work')
//     console.log(err)
// })