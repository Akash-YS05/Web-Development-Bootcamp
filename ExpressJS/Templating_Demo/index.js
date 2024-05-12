const express = require('express')
const path = require('path')
const redditData = require('./data.json')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))    //to be able to start the app from a different directory

app.get('/', (req, res) => {
   res.render('home.ejs')      // also can be => res.render('home') if the view engine is set as ejs
})


app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: num })      //stored the int value in a variable "rand"
})

app.get('/users', (req, res) => {
    const users = [
        'akash', 'aman', 'pikachu', 'orange'
    ]
    res.render('users', { users })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit', {...data})
    } else {
        res.render('notfound', {subreddit})
    }
    
})


app.listen(3000, () => {
    console.log("Listening on 3000")
})