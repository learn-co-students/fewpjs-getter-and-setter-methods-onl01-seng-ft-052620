// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return (this.radius * 2)
    }
    set diameter(diameter) {
        this.radius = diameter/2
    }

    get circumference() {
        // return (Math.PI * this.diameter)
        return (Math.PI * (this.radius * 2))
    }
    set circumference(circumference) {
        this.radius = circumference/Math.PI/2
    }

    get area() {
        return (Math.PI * (this.radius**2))
    }
    set area(area) {
        this.area = area
        this.radius = Math.sqrt(area) / Math.PI
    }

}

// Use Math.PI to get an accurate measurement of pi (π)
// For reference, here are the formulas for calculating diameter, circumference and area:
// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius squared
