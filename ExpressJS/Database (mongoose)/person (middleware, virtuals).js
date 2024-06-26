const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connection open!')
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})
personSchema.pre('save', async function() {
    console.log('About to Save')
})
personSchema.post('save', async function() {
    console.log('Just Saved')
})
const Person = mongoose.model('Person', personSchema)
