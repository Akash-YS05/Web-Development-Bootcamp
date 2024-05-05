// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("resolved", res)     //resolves as soon as it recieves a header
//     return res.json()
// })
// .then((data )=> {
//     console.log(data)
//     return fetch("https://swapi.dev/api/people/2/")
// })
// .then(res => {
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((e) => {
//     console.log("didnt resolve", e);
// })

const starWars = async() => {
    try {
        const res = await fetch("https://swapi.dev/api/people/2/")
        const data = await res.json()
        console.log(data)
        const res2 = await fetch("https://swapi.dev/api/people/3/")
        const data2 = await res2.json()
        console.log(data2)
    } catch(e) {
        console.log("error")
        console.log(e)
    }
    
}

starWars()