import Game from '../Game.js';
import Graphics from '../Graphics.js';
import KeyListener from '../KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';

export default class GameOverScreen extends Scene {
  private win: boolean

  /**
   * @param canvas - the canvas
   */
  constructor(canvas: HTMLCanvasElement, win: boolean) {
    super(canvas);
    this.win = win;
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

    if (this.win) {
      Graphics.writeTextToCanvas('Success!', this.canvas.width / 2, this.canvas.height / 2, this.canvas, 50, 'blue');
      Graphics.writeTextToCanvas('Press ENTER to play again', this.canvas.width / 2, this.canvas.height / 2 + 50, this.canvas, 35, 'blue');
    } else {
      Graphics.writeTextToCanvas('Failure!', this.canvas.width / 2, this.canvas.height / 2, this.canvas, 50, 'red');
      Graphics.writeTextToCanvas('Press ENTER to try again', this.canvas.width / 2, this.canvas.height / 2 + 50, this.canvas, 35, 'red');
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
