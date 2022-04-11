import Graphics from "../Graphics.js";
import KeyListener from "../KeyListener.js";
import GameObject from "./GameObject.js";

export default class FovOverlay extends GameObject {
  private rotation: number;

  private rotation_speed: number;
  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos, './assets/img/fov.png');
    this.rotation = 0;
    this.rotation_speed = 0.03;
    this.keyboard = new KeyListener();
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   *
   * @param canvas the canvas to move over, for max x and y positions
   */
  public move(): void {
    
    console.log(this.xPos);
    console.log(this.yPos);
    // rotate right
    if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.rotation += this.rotation_speed;
    }

    // rotate left
    if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)) {
      this.rotation -= this.rotation_speed;
    }


    // toggle FOG fov
    if (this.keyboard.isKeyDown(KeyListener.KEY_F)) {
      this.image = Graphics.loadNewImage('./assets/img/fov_fog.png');
    }

  }
  /**
   *
   * @returns Rotation value
   */
  public getRotation(): number {
    return this.rotation;
  }
}
