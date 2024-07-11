const  mongoose = require('mongoose');
const Product = require('./product')
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required.']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

// farmSchema.pre('findOneAndDelete', async function(){
//     console.log(data)
// }) 
//pre middleware does not have access to farm data

farmSchema.post('findOneAndDelete', async function(farm) {
    if (farm.products) {
        const data = await Product.deleteMany({_id: {$in: farm.products}})     // 'in' is a mongoose operator
        console.log(data)
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;