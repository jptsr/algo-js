// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the 
// position of the circle. Add a getter accessor named surface that will return the surface of the circle.
// Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle{
    constructor(xPos, yPOs, radius){
        this.xPos = xPos;
        this.yPOs = yPOs;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        let newX = this.xPos + xOffset;
        let newY = this.yPOs + yOffset;
        console.log("The new position is : (" + newX + ";" + newY + ")");
    }
    
    surface(){
       let surface = (Math.PI * Math.pow(this.radius, 2));
       let roudnSurface = Math.round(surface * 100) / 100;
       console.log("Circle surface : " + roudnSurface);
    }
}

let newCircle = new Circle(5, 3, 7);
console.log(newCircle);
newCircle.move(4, 8);
newCircle.surface();