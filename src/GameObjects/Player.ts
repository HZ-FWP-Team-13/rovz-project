import GameObject from './GameObject.js';
import KeyListener from '../KeyListener.js';

export default class Player extends GameObject {
  private ySpeed: number;

  private keyboard: KeyListener;

  /**
   * constructing the player
   */
  constructor(xPos: number, yPos: number) {
    super(xPos, yPos, './assets/img/cyclist.png');
    this.keyboard = new KeyListener();
    this.ySpeed = 2;
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
      // Moving up
      if (this.keyboard.isKeyDown(KeyListener.KEY_W)) {
        this.yPos -= this.ySpeed;
      }
  
      // Moving down
      if (this.keyboard.isKeyDown(KeyListener.KEY_S)) {
        this.yPos += this.ySpeed / 2;
      }
    }
}
