const express = require("express")
const app = express()

// app.use((req, res) => {
//     console.log("New Request")
//     res.send("Request Recieved")
//     //res.send({color: 'green'})      sends a json response
// })



app.get('/', (req, res) => {
    console.log('Home request recieved')
    res.send('Home Page')
})


app.get('/r/:subreddit', (req, res) => {      //just an example, we use ':' to place a variable in path
    // console.log(req.params)
    const { subreddit } = req.params
    res.send(`Welcome to the ${subreddit} subreddit!!`)
})

app.get('/r/:subreddit/:postId', (req, res) => {      //just an example, we use ':' to place a variable in path
    // console.log(req.params)       CONTAINS KEY: VALUE PAIR
    const { subreddit, postId } = req.params
    console.log(req.params)
    res.send(`Welcome to the ${subreddit} subreddit!! The ID of the post is ${postId}`)
})

app.get('/help', (req, res) => {
    console.log('Help request recieved')
    res.send('Provides FAQs and Customer Care Details')
})
app.post('/help', (req, res) => {
    res.send('This is a POST request to /help . Different from GET request')
})


app.get('/contact', (req, res) => {
    console.log('Contact request recieved')
    res.send('Social Media Platforms')
})
app.post('/contact', (req, res) => {
    res.send('This is a POST request to /contact. Different from GET request')
})


//QUERY STRINGS
app.get('/search', (req, res) => {
    //console.log(req.query)
    const { q } = req.query
    if (!q) res.send("Nothing found if nothing searched hhehehehe")
    res.send(`<h1>Displaying Search Results for ${q}`)
})


// ALWAYS COMES AT THE LAST AS WE ONLY HAVE ACCESS TO ONE GET REQUEST - IN ORDER
//USED IN CASE THE REQUEST IS INVALID
app.get('*', (req, res) => {         
    console.log('INVALID REQUEST')
    res.send('Request Invalid')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})