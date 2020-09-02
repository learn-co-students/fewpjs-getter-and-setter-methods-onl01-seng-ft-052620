// Add your Circle class here

class Circle{
constructor(radius){
    this.radius = radius
}

get diameter(){
    return this.radius * 2
}

set diameter(dia){
    this.radius = dia/2
}

get circumference(){
    return (this.radius*2) * Math.PI
}

set circumference(circ){

    this.radius = (circ/Math.PI)/2
}

get area(){
    return Math.PI * (this.radius ** 2)
}

set area(area){
    this.area = area
    this.radius = Math.sqrt(area) / Math.PI
}

}