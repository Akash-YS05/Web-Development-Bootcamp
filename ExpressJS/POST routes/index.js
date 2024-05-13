const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')
uuid()

app.use(express.urlencoded({ extended: true }))    //only for form values
app.use(express.json())    //for json values for example
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


let comments = [
    {
        id: uuid(),
        username: 'Akash',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Aman',
        comment: 'pls forgive me'
    },
    {
        id: uuid(),
        username: 'Alisha',
        comment: 'Awwwwwwww that is adorbale'
    },
    {
        id: uuid(),
        username: 'Akshat',
        comment: 'Get out of here man'
    }

]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    //console.log(req.body)
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)      //find gives the first matching result - array in this case
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)      //find gives the first matching result - array in this case
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newComment = req.body.comment
    const foundComment = comments.find(c => c.id === id) 
    foundComment.comment = newComment          //update the comment of that id with the new comment
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id!==id)
    res.redirect('/comments')
})




app.get('/test', (req, res) => {
    res.send('GET /test response')
})
app.post('/test', (req, res) => {
    //console.log(req.body)
    const { name, qty } = req.body
    res.send(`Hey ${name}, your registration number is ${qty}`)
})


app.listen(3000, () => {
    console.log('ON PORT 3000')
})

