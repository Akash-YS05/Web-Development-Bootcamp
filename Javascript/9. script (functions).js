// function test() {
//     console.log('its a fucntion');
// }

// test()
function avg(num1, num2){
    average = (num1+num2)/2
    console.log(`Average of ${num1} and ${num2} is ${average}`)
}

avg(2,3)

function add(num) {
    let sum = num +10;
    return sum;
}
add(6)

nm = ['hello', 'hi','nye']
if (nm.length === 3) {
    console.log('ok bro')
}

function sumArray(arr) {
    num = 0;
    for (let i=0; i<=arr.length; i++) {
        num = num + arr[i]
    }
    console.log(num)
    return num;
}
sumArray([1,1,1])