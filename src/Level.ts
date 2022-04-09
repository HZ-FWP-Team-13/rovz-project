import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import FovOverlay from './FovOverlay.js';

export default class Level extends Scene {
  // Player
  private player: Player;

  private fov: FovOverlay;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);

    // Create player
    this.player = new Player(this.game.canvas.width / 2, this.game.canvas.height / 2);

    this.fov = new FovOverlay(this.player.getXPos(), this.player.getYPos());
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    // Move the player
    this.player.move(this.game.canvas);
    this.fov.move(this.game.canvas);
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  /**
   *
   *
   */

  public update(elapsed: number): Scene {
    console.log(this.player.getXPos());
    this.fov.setXPosition(this.player.getXPos());
    this.fov.setYPosition(this.player.getYPos());
    return null;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.save();

    this.game.ctx.translate(this.player.getXPos(), this.player.getYPos());
    // this.game.ctx.rotate(this.player.getRotation());
    this.player.draw(this.game.ctx);
    this.game.ctx.restore();

    this.game.ctx.save();
    this.game.ctx.translate(this.player.getXPos(), this.player.getYPos());
    // this.game.ctx.rotate(this.fov.getRotation() + this.player.getRotation());
    this.game.ctx.rotate(this.fov.getRotation());
    this.fov.draw(this.game.ctx);
    this.game.ctx.restore();
  }
}
