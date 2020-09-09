// Add your Circle class here
class Circle{

    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    set circumference(newVal){
        this.radius = newVal / Math.PI / 2
    }

    get area(){
        return this.radius * this.radius * Math.PI
    }

    set area(newVal){
        this.radius = Math.sqrt(newVal / Math.PI)
    }

}