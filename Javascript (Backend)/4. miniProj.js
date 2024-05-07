const form = document.querySelector('#form')
form.addEventListener('submit',async function (e) {
    e.preventDefault()
    console.log('submitted')
    const search = form.elements.q.value
    const config = { params: { q: search} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    //console.log(res.data[0].show.image.medium)
    showInfo(res.data)
    //showName(res.data)
    form.elements.q.value = ''
})

const showInfo = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
            const info = document.createElement('p')
            const title = result.show.name
            const gen = result.show.genres
            info.append(title)
            info.append(gen)
            document.body.append(info)
           
        }
    }
}

