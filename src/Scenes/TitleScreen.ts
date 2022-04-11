import Game from '../Game.js';
import Graphics from '../Graphics.js';
import KeyListener from '../KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';

export default class TitleScreen extends Scene {
  private intialFullscreen;

  /**
   * @param canvas - the canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.intialFullscreen = Game.isFullScreen();
  }

  /**
   * @param elapsed - elapsed
   * @returns - boolean
   */
  public update(elapsed: number): boolean {
    return false;
  }

  /**
   * rendering
   */
  public render(): void {
    const ctx = this.canvas.getContext('2d');
    const horizontalCenter = this.canvas.width / 2;

    Graphics.writeTextToCanvas('ROVZ Traffic Safety Game', horizontalCenter, 300, this.canvas, 40, 'blue');
    Graphics.writeTextToCanvas('Early Demonstration', horizontalCenter, 350, this.canvas, 20, 'grey');

    // Gives the player instructions for fullscreen mode.
    // BUG: Text disappears when the user exits fullscreen.
    if (!this.intialFullscreen && !Game.isFullScreen()) {
      Graphics.writeTextToCanvas('Please press F11 and F5 to enter fullscreen and reload for the best experience', horizontalCenter, 750, this.canvas, 20, 'black');
    } else if (!this.intialFullscreen && Game.isFullScreen) {
      Graphics.writeTextToCanvas('Please press F5 to reload the page for the best experience', horizontalCenter, 750, this.canvas, 20, 'black');
    }
  }

  // TODO: More circular dependency
  /**
   * @param game - the game
   */
  public processInput(game: Game): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
      game.setCurrentScene(new Level(this.canvas, game));
    }
  }
}
