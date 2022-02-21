// Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle 
// with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    generate(rectangles){
        rectangles = [];
        for(let i = 0; i < 10; i++){
            rectangles[i] = new Rectangle(Math.floor(Math.random() * 11), Math.floor(Math.random() * 1001), Math.floor(Math.random() * 1001), Math.floor(Math.random() * 1001));
        }
        return rectangles;
    }

    collides(otherRectangle){
        otherRectangle = [];
        otherRectangle = this.generate();

        otherRectangle.forEach(element => {
            let oTopXPos = element.topLeftXPos;
            let oTopYPos = element.topLeftYPos;
            let dX = oTopXPos - this.topLeftXPos;
            let dY = oTopYPos - this.topLeftYPos;
            let oW = element.width;
            let oL = element.length;

            console.log(element);

            if((oTopXPos > this.topLeftXPos && oTopYPos < this.topLeftYPos) && (Math.abs(dX) > this.width || Math.abs(dY) > this.length)){
                console.log("Colliding : false");
            }else if((oTopXPos < this.topLeftXPos && oTopYPos > this.topLeftYPos) && (Math.abs(dX) > oW || Math.abs(dY) > oL)){
                console.log("Colliding : false");
            }else if((oTopYPos > this.topLeftXPos && oTopXPos >= this.topLeftXPos) && (Math.abs(dX) > this.width || Math.abs(dY) > oL)){
                console.log("Colliding : false");
            }else if((oTopYPos <= this.topLeftXPos && oTopXPos < this.topLeftXPos) && (Math.abs(dX) > oW || Math.abs(dY) > this.length)){
                console.log("Colliding : false");
            }else{
                console.log("Colliding : true");
            }
        });
        console.log("Done");
    }
}

let rect1 = new Rectangle(5, 3, 7, 10);
rect1.collides();