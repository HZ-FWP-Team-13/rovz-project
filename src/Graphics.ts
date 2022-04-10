export default abstract class Graphics {
  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   * @param source The address or URL of the a media resource that is to be loaded
   * @returns an HTMLImageElement with the source as its src attribute
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Writes text to the canvas
   * NOTE: This function currently cannot use line breaks.
   *
   * @param text - Text to write
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param canvas - The canvas
   * @param fontSize - Font size in pixels
   * @param color - The color of the text
   * @param alignment - Where to align the text
   */
  public static writeTextToCanvas(
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    canvas: HTMLCanvasElement,
    fontSize: number = 20,
    color: string = 'black',
    alignment: CanvasTextAlign = 'center',
  ): void {
    const ctx = canvas.getContext('2d');
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }
}
