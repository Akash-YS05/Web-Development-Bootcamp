//XHR -> XMLHttpRequest
// "https://swapi.dev/api/people/1/"

const req = new XMLHttpRequest()

req.onload = function() {
    console.log("it worked")
    const data = JSON.parse(this.responseText)
    console.log(data)
}

req.onerror = function() {
    console.log("some error")
    console.log(this)
}

req.open("GET", "https://swapi.dev/api/people/1/")
req.send()