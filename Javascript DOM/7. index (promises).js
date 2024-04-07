const fakeRequest = (url)=> {
    return new Promise((resolve, reject)=> {
        const rand = Math.random();
        setTimeout(()=> {
            if (rand<0.5) {
                resolve("ALL GOOD")
            }
            reject("errorrrr");
        }, 1000)
    })
}


fakeRequest('/dogs')
    .then((data)=> {
        console.log("Done!")
        console.log(data)
    })
    .catch((err)=> {
        console.log("shet", err)
    })