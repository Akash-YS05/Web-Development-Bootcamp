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

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId , ref: 'User'}
})


const User = new mongoose.model('User', userSchema)
const Tweet = new mongoose.model('Tweet', tweetSchema)

// const makeTweets = async() => {
//     // const user = new User({username: "Akash", age: 20})
//     const user = await User.findOne({username: "Akash"})
//     const tweet3 = new Tweet({text: "Hi its my third tweet!", likes: 10000})
//     tweet3.user = user
//     // user.save()
//     tweet3.save()
// }

// makeTweets()

const findtweet = async() => {
    const t = await Tweet.findOne({likes: 10000}).populate('user', 'username')
    console.log(t)
}
findtweet()