const joke = require('give-me-a-joke')
const colors = require('colors')
//console.dir(joke)
// {
//     getRandomCNJoke: [Function (anonymous)],
//     getCustomJoke: [Function (anonymous)],
//     getRandomDadJoke: [Function (anonymous)],
//     getRandomJokeOfTheDay: [Function (anonymous)]
//   }

joke.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow)
})



