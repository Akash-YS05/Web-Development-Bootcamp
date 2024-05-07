function makeColor(r,g,b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function() {      //sets function in each object
        const { r,g,b } = this  
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = function() {
        return (
            '#' + ((1<<24) + (r<<10) + (g<<8) + b).toString(16).slice(1)
        )
    }
    return color
}

const myColor = makeColor(89,23,100)
myColor.rgb()
myColor.hex()