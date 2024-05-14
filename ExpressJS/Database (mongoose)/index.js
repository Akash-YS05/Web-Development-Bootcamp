const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviesDb')
    .then(() => {
        console.log('Connection open!')
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })


const movieSchema = new mongoose.Schema({        //tells mongoose to keep the content of the model in this format
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)     //the MODEL (Movie) first lettershould be capital, creates a plural connection in the db
//const interstellar = new Movie({title: 'Interstellar', year: 2014, score: 9.2, rating: 'R'})

Movie.insertMany([
    {title: 'Godzilla', year: 2019, score: 9, rating: 'R'},
    {title: 'Kung Fu Panda', year: 2017, score: 8.9, rating: 'PG-13'},
    {title: 'Gravity', year: 2010, score: 8.5, rating: 'PG'},
    {title: 'Space Odyssey', year: 1967, score: 9.5, rating: 'R'}
])