import Game from './Game.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * Creates a new GameItem on a given location
   *
   * @param imageSrc the src of the image
   * @param xPos starting X position of GameItem
   * @param yPos starting Y position of GameItem
   */
  public constructor(imageSrc: string, xPos: number, yPos: number) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = xPos;
    this.yPos = yPos;
  }

  /**
   * getImageHeight
   *
   * @returns the current height of the image.
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   * getImageWidth
   *
   * @returns the current width of the image.
   */
  public getImageWidth(): number {
    return this.img.width;
  }

  /**
   * getXPos
   *
   * @returns the current X-position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * getYPos
   *
   * @returns the current Y-position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * draw
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);
  }
}
