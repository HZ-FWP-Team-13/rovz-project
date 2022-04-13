import Graphics from "../Graphics.js";
import KeyListener from "../KeyListener.js";
import GameObject from "./GameObject.js";
export default class FovOverlay extends GameObject {
    rotation;
    rotation_speed;
    keyboard;
    constructor(xPos, yPos) {
        super(xPos, yPos, './assets/img/fov.png');
        this.rotation = 0;
        this.rotation_speed = 0.03;
        this.keyboard = new KeyListener();
    }
    move() {
        console.log(this.xPos);
        console.log(this.yPos);
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.rotation += this.rotation_speed;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)) {
            this.rotation -= this.rotation_speed;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_F)) {
            this.image = Graphics.loadNewImage('./assets/img/fov_fog.png');
        }
    }
    getRotation() {
        return this.rotation;
    }
}
//# sourceMappingURL=FovOverlay.js.map