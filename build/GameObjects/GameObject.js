import Graphics from '../Graphics.js';
export default class GameObject {
    xPos;
    yPos;
    image;
    state;
    constructor(xPos, yPos, imageSrc) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.image = Graphics.loadNewImage(imageSrc);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos - this.image.width / 2, this.yPos - this.image.height / 2);
    }
    setXPos(xPos) {
        this.xPos = xPos;
    }
    setYPos(yPos) {
        this.yPos = yPos;
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    getImageWidth() {
        return this.image.width;
    }
    getImageHeight() {
        return this.image.height;
    }
    getTopBound() {
        return this.yPos - this.image.height;
    }
    getLeftBound() {
        return this.xPos - this.image.width / 2;
    }
    getRightBound() {
        return this.xPos + this.image.width / 2;
    }
    collidesWith(object) {
        if ((this.getRightBound() >= object.getLeftBound()
            && this.getLeftBound() <= object.getRightBound())
            && (this.getTopBound() <= object.getYPos() && this.yPos >= object.getTopBound())) {
            console.log(`${this} collided with ${object}`);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=GameObject.js.map