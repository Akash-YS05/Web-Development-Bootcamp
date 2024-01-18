const num = [1,2,3,4,5,6,7,8,9,10]

function print(element) {
    console.log(element);
}

num.forEach(print)  //runs the function for each element
const film = [
    {
        title: 'alien',
        rating: 90
    },
    {
        title: 'rail',
        rating: 68
    }
]

film.forEach(function(movie) {
    console.log(movie)
})