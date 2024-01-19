//FUNCTION CALLS

const nums = [1,2,3,4,5,6,7,8,9]
console.log(...nums);   //spreads the array into its components as seperate values
console.log(...'hello')

//ARRAY LITERALS

const cat = ['meow','meow1','meow2'];
const dog = ['bhow','bhow1','bhow2'];
// const animal = [...cat]   //O/P: cat is copied into animal
const animal = [...cat,...dog]
console.log(animal)

//OBJECT LITERALS

const meh = {
    legs: 4,
    hands: 2
}
const mehh = {
    ears: 2,
    hands: 3
}
const mehhh = {...meh, ...mehh}
console.log(mehhh)