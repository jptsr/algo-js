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
        // console.log(rectangles);
    }

    collides(otherRectangle){
        otherRectangle = [];
        otherRectangle = this.generate();

        // for(let i = 0; i < otherRectangle.length; i++){
        //     // otherRectangle[i];

        //     let oTopXPos = otherRectangle[i].topLeftXPos;
        //     let oTopYPos = otherRectangle[i].topLeftYPos
        //     let dX = oTopXPos - this.topLeftXPos;
        //     let dY = oTopYPos - this.topLeftYPos;
        //     let oW = otherRectangle[i].width;
        //     let oL = otherRectangle[i].length;
        
        //     if((oTopXPos > this.topLeftXPos && oTopYPos < this.topLeftYPos) && (Math.abs(dX) > this.width || Math.abs(dY) > this.length)){
        //         console.log(i);
        //         return false;
        //     }else if((oTopXPos < this.topLeftXPos && oTopYPos > this.topLeftYPos) && (Math.abs(dX) > oW || Math.abs(dY) > oL)){
        //         console.log(i);
        //         return false;
        //     }else if((oTopYPos > this.topLeftXPos && oTopXPos >= this.topLeftXPos) && (Math.abs(dX) > this.width || Math.abs(dY) > oL)){
        //         console.log(i);
        //         return false;
        //     }else if((oTopYPos <= this.topLeftXPos && oTopXPos < this.topLeftXPos) && (Math.abs(dX) > oW || Math.abs(dY) > this.length)){
        //         console.log(i);
        //         return false;
        //     }else{
        //         console.log(i);
        //         return true;
        //     }
        // }

        otherRectangle.forEach(element => {
            // console.log(element);
            let oTopXPos = element.topLeftXPos;
            let oTopYPos = element.topLeftYPos
            let dX = oTopXPos - this.topLeftXPos;
            let dY = oTopYPos - this.topLeftYPos;
            let oW = element.width;
            let oL = element.length;
        
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
        });
    }
}

let rect1 = new Rectangle(5, 3, 7, 10);
console.log(rect1.collides());