import Game from '../Game.js';
import Graphics from '../Graphics.js';
import KeyListener from '../KeyListener.js';

export default abstract class Scene {
  // Image to be used for the background
  protected bgImage: HTMLImageElement;

  // KeyListener for taking input
  protected keyboard: KeyListener;

  // Canvas on which to draw
  protected canvas: HTMLCanvasElement;

  /**
   * @param canvas - the canvas
   * @param bgImgSrc - background image source
   */
  constructor(canvas: HTMLCanvasElement) {
    this.keyboard = new KeyListener();
    this.canvas = canvas;
  }

  // Abstract methods
  public abstract update(elapsed: number): boolean;
  public abstract render(): void;
  public abstract processInput(game : Game): void;
}
