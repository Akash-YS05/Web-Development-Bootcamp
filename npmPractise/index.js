const figlet = require('figlet')
const colors = require('colors')
figlet('Hello World :)', function(err, data) {
    if (err) console.dir(err)
    else console.log(data.rainbow);
})