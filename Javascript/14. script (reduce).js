sum = [1,34,567,89,22,9]

const total = sum.reduce((total, price) => {
    return total+price
})

sum.reduce((total, price) => total+price, 100) //100 is the value for total 

const mini = sum.reduce((min, price) => {
    if (price<min) {
        return price;
    } 
    return min;
})