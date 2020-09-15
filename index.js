class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(num) {
        this.radius = num / 2
    }

    get circumference() {
        return this.radius*2*Math.PI
    }

    set circumference(num) {
        this.radius = num / (Math.PI*2)
    }

    get area() {
        return Math.PI*(this.radius**2)
    }

    set area(num) {
        this.radius = Math.sqrt(num / Math.PI)
    }
}
