const login = async (username, password) => {
    if (!username || !password) throw "missing data"
    if (password === 1234) return "welcome"
    throw "invalid try"
}

login('akash', 1234)
    .then(msg => {
        console.log("Logged in successfully")
        console.log(msg)
    })
    .catch(err => {
        console.log("oops")
        console.log(err)
    })