import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  private rotation: number;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/character_robot_walk0.png', maxX - 76, maxY - 92);
    this.xVel = 3;
    this.yVel = 3;
    this.rotation = 0;
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
    const minX = 0;
    const maxX = canvas.width - this.img.width;
    const minY = 0;
    const maxY = canvas.height - this.img.height;
    let speed = 0;

    // Moving right
    if (this.keyboard.isKeyDown(KeyListener.KEY_D) && this.xPos < maxX) {
      this.rotation += 0.01;
    }

    // Moving left
    if (this.keyboard.isKeyDown(KeyListener.KEY_A) && this.xPos > minX) {
      this.rotation -= 0.01;
    }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_W) && this.yPos > minY) {
      speed += this.yVel;
      if (this.yPos < minY) {
        this.yPos = minY;
      }
    }

    // Moving down
    if (this.keyboard.isKeyDown(KeyListener.KEY_S) && this.yPos < maxY) {
      speed -= this.yVel;
      if (this.yPos > maxY) {
        this.yPos = maxY;
      }
    }

    if (speed !== 0) {
      this.xPos += Math.cos(this.rotation) * speed;
      this.yPos += Math.sin(this.rotation) * speed;
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
  public getRotation(): number {
    return this.rotation + (90 * Math.PI) / 180;
  }

  public moveToRotation() : void {
    let speed = 0;

    if (this.keyboard.isKeyDown(KeyListener.KEY_UP)) {
      speed
    }
  }
}
