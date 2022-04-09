import FovOverlay from './FovOverlay.js';
import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  // private rotation: number;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   *
   * @param yPos starting X position
   * @param xPos starting Y position
   *
   */
  public constructor(xPos: number, yPos: number) {
    super('./assets/img/cyclist.png', xPos, yPos);
    this.xVel = 3;
    this.yVel = 3;
    // this.rotation = 0;
    this.keyboard = new KeyListener();
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   *
   * @param canvas the canvas to move over, for max x and y positions
   */
  public move(canvas: HTMLCanvasElement): void {
    // Set the limit values
    let speed = 0;

    // Moving right
    // if (this.keyboard.isKeyDown(KeyListener.KEY_D)) {
    //  this.rotation += 0.01;
    // }

    // Moving left
    // if (this.keyboard.isKeyDown(KeyListener.KEY_A)) {
    //  this.rotation -= 0.01;
    // }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_W)) {
      speed += this.yVel;
    }

    // Moving down
    if (this.keyboard.isKeyDown(KeyListener.KEY_S)) {
      speed -= this.yVel;
    }

    if (speed !== 0) {
      // this.xPos += Math.cos(this.rotation) * speed;
      // this.yPos += Math.sin(this.rotation) * speed;
      this.yPos -= speed;
    }
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: GameItem): boolean {
    return this.xPos < other.getXPos() + other.getImageWidth()
    && this.xPos + this.img.width > other.getXPos()
    && this.yPos < other.getYPos() + other.getImageHeight()
    && this.yPos + this.img.height > other.getYPos();
  }

  /**
   * Increases the speed
   *
   * @param size the amount of speed to add
   */
  increaseSpeed(size: number): void {
    this.xVel += size;
    this.yVel += size;
  }

  /**
   *
   * @returns Rotation value
   */
  // public getRotation(): number {
  //  return this.rotation + (90 * Math.PI) / 180;
  // }
}
