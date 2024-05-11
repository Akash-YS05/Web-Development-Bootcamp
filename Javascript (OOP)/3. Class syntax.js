class Color {
    constructor(r, g, b, name){
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
    rgb(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
    greet(){
        return `Hey from the color whose name ${this.name}`
    }
    hex(){
        const { r,g,b } = this
        return (
            '#' + ((1<<24) + (r<<10) + (g<<8) + b).toString(16).slice(1)
        )
    }
}

const c1 = new Color(3,78,46, "idek bro")
