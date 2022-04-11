import Graphics from '../Graphics.js';

export default abstract class GameObject {
  protected xPos: number;
  protected yPos: number;

  protected image: HTMLImageElement;

  // Used to determine what an GameObject should be doing (i.e. what direction it should move in)
  protected state: string;

  /**
   * @param xPos - x position
   * @param yPos - y position
   * @param imageSrc - image location
   */
  public constructor(xPos: number, yPos: number, imageSrc: string) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.image = Graphics.loadNewImage(imageSrc);
  }

  // TODO: Consider refactoring as mobile and immobile GameObjects
  public abstract move(): void;

  /**
   * @param ctx 2D rendering context for the canvas drawing surface
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image,
      this.xPos - this.image.width / 2,
      this.yPos - this.image.height / 2,
    );
  }

  /**
   * Sets a new x position for the GameObject
   *
   * @param xPos New x position
   */
  public setXPos(xPos: number) : void {
    this.xPos = xPos;
  }

  /**
   * Sets a new y position for the GameObject
   *
   * @param yPos New y position
   */
  public setYPos(yPos: number) : void {
    this.yPos = yPos;
  }

  /**
   * @returns current x position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * @returns current y position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   *
   * @returns image width in pixels
   */
  public getImageWidth(): number {
    return this.image.width;
  }

  /**
   *
   * @returns image height in pixels
   */
  public getImageHeight(): number {
    return this.image.height;
  }

  /**
   * @returns top bound
   */
  public getTopBound(): number {
    return this.yPos - this.image.height;
  }

  /**
   * @returns left bound of the object
   */
   public getLeftBound(): number {
    return this.xPos - this.image.width / 2;
  }

  /**
   * @returns right bound of the object
   */
  public getRightBound(): number {
    return this.xPos + this.image.width / 2;
  }

  /**
   * @param object Object to check collision with
   * @returns Whether the objects collide or not
   */
   public collidesWith(object: GameObject): boolean {
    if (
      (this.getRightBound() >= object.getLeftBound()
        && this.getLeftBound() <= object.getRightBound())
      && (this.getTopBound() <= object.getYPos() && this.yPos >= object.getTopBound())
    ) {
      console.log(`${this} collided with ${object}`);
      return true;
    }
    return false;
  }
}
