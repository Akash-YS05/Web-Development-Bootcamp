console.log('hiii')

setTimeout(()=> {    // takes 2 intervals, first is what we want to do and 2nd is the delay time
    console.log('u there?')
}, 2000)

console.log('byeee')

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)