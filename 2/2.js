function Circle(radiuc) {
    this.radiuc = radiuc
    this.getArea = function(){
        return 3.14 * this.radiuc ** 2
    }
    this.getPerimeter = function() {
        return 2 * 3.14 * this.radiuc
    }
}
let circle = new Circle(10)
console.log(circle.getArea())
console.log(circle.getPerimeter())