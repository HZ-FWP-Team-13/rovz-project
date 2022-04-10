import GameLoop from './GameLoop.js';
import Scene from './Scenes/Scene.js';
import TitleScreen from './Scenes/TitleScreen.js';

/**
 * Main class of this Game.
 */
export default class Game {
  // The canvas
  private canvas: HTMLCanvasElement;

  // The gameloop
  private gameloop: GameLoop;

  // The current scene
  private currentScene: Scene;

  /**
   * Construct a new Game
   *
   * @param canvas The canvas HTML element to render on
   */
  public constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;

    // Setting the canvas dimensions
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.currentScene = new TitleScreen(this.canvas);

    // Start the animation
    console.log('start animation');
    this.gameloop = new GameLoop(this);
    this.gameloop.start();
  }

  /**
   * @returns the current scene
   */
  public getCurrentScene(): Scene {
    return this.currentScene;
  }


  // TODO: This is where the circular dependency problem probably starts...
  /**
   * Sets a new scene
   * 
   * @param scene New scene
   */
  public setCurrentScene(scene: Scene): void {
    this.currentScene = scene;
  }

  /**
   * @returns canvas width
   */
  public getCanvasWidth(): number {
    return this.canvas.width;
  }

  /**
   * @returns canvas height
   */
  public getCanvasHeight(): number {
    return this.canvas.height;
  }

  /**
   * Generates a random integer number between min and max
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.randomInteger()` instead of `this.randomInteger()`.
   *
   * @param min - minimal time
   * @param max - maximal time
   * @returns a random integer number between min and max
   */
  public static randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
   * Detects if the user is currently in fullscreen or not.
   *
   * @returns boolean
   */
  public static isFullScreen(): boolean {
    return window.innerHeight === screen.height;
  }
}
