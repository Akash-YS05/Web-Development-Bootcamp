// let arr = [
//     ['apple', 'mango','banana', 'grapes','kiwi'],
//     ['apple', 'potato','banana', 'grapes','kiwi'],
//     ['apple', 'mango','banana', 'carrot','kiwi'],
//     ['apple', 'mango','amla', 'grapes','kiwi'],
// ]

// for (let fruit of arr) {
//     for (let sub of fruit) {
//         console.log(sub)
//     }
// }

const score = {
    akash: 90,
    alisha: 95,
    blah: 20,
    blahaha: 59
}

// for (let mark in score) {
//     console.log(`${mark} scored ${score[mark]}`)
// }
let total = 0;
let count = 0;
for (let marks of Object.values(score)) {
    total+=marks
    count++
}
console.log(`avg is ${total/count}`)
