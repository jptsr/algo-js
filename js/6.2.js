// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) 
// that returns true only if the current rectangle collides with otherRectangle.
// Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    
    collides(otherRectangle){
        otherRectangle = new Rectangle(-1, -3, 7, 9);
        let oTopXPos = otherRectangle.topLeftXPos;
        let oTopYPos = otherRectangle.topLeftYPos
        let dX = oTopXPos - this.topLeftXPos;
        let dY = oTopYPos - this.topLeftYPos;
        let oW = otherRectangle.width;
        let oL = otherRectangle.length;

        if((oTopXPos > this.topLeftXPos && oTopYPos < this.topLeftYPos) && (Math.abs(dX) > this.width || Math.abs(dY) > this.length)){
            return false;
        }else if((oTopXPos < this.topLeftXPos && oTopYPos > this.topLeftYPos) && (Math.abs(dX) > oW || Math.abs(dY) > oL)){
            return false;
        }else if((oTopYPos > this.topLeftXPos && oTopXPos >= this.topLeftXPos) && (Math.abs(dX) > this.width || Math.abs(dY) > oL)){
            return false;
        }else if((oTopYPos <= this.topLeftXPos && oTopXPos < this.topLeftXPos) && (Math.abs(dX) > oW || Math.abs(dY) > this.length)){
            return false;
        }else{
            return true;
        }
    }
}

let rect1 = new Rectangle(5, 3, 8, 6);
console.log(rect1);
console.log(rect1.collides());