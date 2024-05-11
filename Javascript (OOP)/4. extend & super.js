class Student {
    constructor(name, sec){
        this.name = name
        this.sec= sec
    }
    intro() {
        return `${this.name} is from ${this.sec}`
    }
}

class First extends Student {
    constructor(name, sec, age=80){
        super(name, sec)
        this.age = age
    }
    score1(){
        return `${this.name} scored 50`
    }
    year(){
        return `He is in first year`
    }
}
class Second extends Student {
    score2(){
        return `${this.name} scored 90`
    }
}

