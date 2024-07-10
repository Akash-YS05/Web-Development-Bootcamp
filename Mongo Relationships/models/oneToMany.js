//ONE TO MANY RELATION

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relationDB')
    .then(() => {
        console.log('Connection open!')
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })

const {Schema} = mongoose;

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     {name: 'Goddess Melon', price: 120, season: 'Summer'},
//     {name: 'Watermelon', price: 70, season: 'Summer'},
//     {name: 'Baby Melon', price: 100, season: 'Winter'},
// ])

// const makeFarm = async() => {
//     const farm = new Farm({ name: 'Full Belly Farm', city: 'Guinda, CA'})
//     const melon = await Product.findOne({name: 'Goddess Melon'})
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm)
// }

// makeFarm()

const addProduct = async() => {
    const farm  = await Farm.findOne({name: 'Full Belly Farm'})
    const watermelon = await Product.findOne({name: 'Watermelon'})
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}

// addProduct()


Farm.findOne({name: 'Full Belly Farm'})        
    .populate('products')             //populates the farm with the products the objectId refers to
    .then(farm => console.log(farm))

