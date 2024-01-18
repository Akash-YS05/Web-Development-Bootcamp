const func = x => {
    return x*5;
}

const add = (x,y) => {
    return x+y;
}

const dice = () => {
    return Math.floor(Math.random()*6) + 1
}

const sub = (num) => (   // Implicit return. () instead of {}
    num-1
)

const prod = (a,b) => a*b