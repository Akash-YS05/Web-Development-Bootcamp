function Color(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}

Color.prototype.rgb = function() {      //sets the function in the prototype of the object
    const { r,g,b } = this
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex  = function() {     //dont use arrow function
    const { r,g,b } = this
    return (
        '#' + ((1<<24) + (r<<10) + (g<<8) + b).toString(16).slice(1)
    )
}

const color1 = new Color(87, 2, 78)
const color2 = new Color(22, 28, 18)