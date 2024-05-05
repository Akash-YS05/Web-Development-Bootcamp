// axios.get("https://swapi.dev/api/people/3/")
// .then(res => {
//     console.log(res)
// })
// .catch((e)=> {
//     console.log(e)
// })


const starWars = async (id)=> {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        //console.log(res.data)
    } catch(e) {
        //console.log(e)
    }
   
}

//starWars(12)


const jokes = document.querySelector('#joke')
const btn = document.querySelector('button')


const addJoke = async () => {
    const jokeText = await dadJoke()
    console.log(jokeText)
    const newJoke = document.createElement('li')
    newJoke.append(jokeText)
    jokes.append(newJoke)
}
const dadJoke = async() => {
    try {
        const config = {headers: {Accept: 'application/json'}}   //varies from api to api
        const res = await axios.get("https://icanhazdadjaaaoke.com/", config)
        return res.data.joke
    } catch(e) {
        return "No joke for now!"
    }
   
    
}

btn.addEventListener('click', addJoke)

