//ONE TO FEW RELATION


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relationDB')
    .then(() => {
        console.log('Connection open!')
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: {_id: false},   //turns off the id assigning feature to each address
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema) 
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 sesame st.',
        city: 'new york',
        state: 'ny',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id)
    user.addresses.push({
        street: '3rd st.',
        city: 'new york',
        state: 'ny',
        country: 'USA'
    })
    const res = await user.save()
    console.log(res)
}
addAddress('66855831d8a825997f8e8073')
// makeUser()