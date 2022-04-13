import Game from '../../Game.js';
import Graphics from '../../Graphics.js';
import GameObject from '../GameObject.js';
export default class Car extends GameObject {
    xSpeed;
    direction;
    constructor(yPos, xSpeed, direction) {
        super(0, yPos, '');
        this.direction = direction;
        if (this.direction === 'LEFT') {
            this.image = Graphics.loadNewImage('./assets/img/car/car_left.png');
            this.xPos = 1920 + this.image.width + Game.randomInteger(0, 1500);
        }
        else {
            this.image = Graphics.loadNewImage('./assets/img/car/car_right.png');
            this.xPos = 0 - this.image.width - Game.randomInteger(0, 1500);
        }
        this.xSpeed = xSpeed;
    }
    move() {
        if (this.direction === 'LEFT') {
            this.xPos -= this.xSpeed;
            if (this.xPos <= -100) {
                this.xPos = 1920 + this.image.width + Game.randomInteger(0, 1500);
            }
        }
        else {
            this.xPos += this.xSpeed;
            if (this.xPos >= 2000) {
                this.xPos = 0 - this.image.width - Game.randomInteger(0, 1500);
            }
        }
    }
}
//# sourceMappingURL=Car.js.map