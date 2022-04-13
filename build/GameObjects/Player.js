import GameObject from './GameObject.js';
import KeyListener from '../KeyListener.js';
export default class Player extends GameObject {
    ySpeed;
    keyboard;
    constructor(xPos, yPos) {
        super(xPos, yPos, './assets/img/cyclist.png');
        this.keyboard = new KeyListener();
        this.ySpeed = 2;
    }
    move() {
        console.log(this.xPos);
        console.log(this.yPos);
        if (this.keyboard.isKeyDown(KeyListener.KEY_W)) {
            this.yPos -= this.ySpeed;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_S)) {
            this.yPos += this.ySpeed / 2;
        }
    }
}
//# sourceMappingURL=Player.js.map