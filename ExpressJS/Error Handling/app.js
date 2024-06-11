const express = require('express')
const app = express()
const AppError = require('./AppError')

app.get('/error', (req, res)=>{
    throw new AppError('example error', 401)
    // res.status(404)       client error response
    // throw new Error('Example Error')
})

app.get('/admin', (req, res) => {
    throw new AppError('not an admin', 403)
})
app.use((err, req, res, next) => {
    const {status=400, message = 'something"s wrong'} = err
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('working on 3000')
})