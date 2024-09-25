const express = require('express')
const User = require('./models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const user = require('./models/user')
const app = express()


mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(() => {
        console.log('Connection open!')
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({extended: true}))


app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.post('/register', async (req, res) => {
    const {password, username} = req.body
    const hash = await bcrypt.hash(password, 12)
    const user = new User({
        username, 
        password: hash
    })
    await user.save()
    res.render('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    const validpw = await bcrypt.compare(password, user.password)
    if (validpw) {
        res.send("Welcome in!!")
    } else {
        res.send("Try Again...")
    }

})

app.listen(3000, () => {
    console.log("Server Up")
})