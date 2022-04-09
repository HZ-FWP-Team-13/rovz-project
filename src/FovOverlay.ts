import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';

export default class FovOverlay extends GameItem {
  private rotation: number;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  public constructor(xPos: number, yPos: number) {
    super('./assets/img/fov.png', xPos, yPos);
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
    // rotate right
    if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.rotation += 0.01;
    }

    // rotate left
    if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)) {
      this.rotation -= 0.01;
    }
  }

  /**
   *
   * @param xPos new X position
   */
  public setXPosition(xPos: number) : void {
    this.xPos = xPos;
  }

  /**
   *
   * @param yPos new Y position
   */
  public setYPosition(yPos: number) : void {
    this.yPos = yPos;
  }

  /**
   *
   * @returns Rotation value
   */
  public getRotation(): number {
    return this.rotation;
  }
}
