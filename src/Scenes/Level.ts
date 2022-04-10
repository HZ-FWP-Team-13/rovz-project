import Game from '../Game.js';
import Car from '../GameObjects/Enemies/Car.js';
import FovOverlay from '../GameObjects/FovOverlay.js';
import Player from '../GameObjects/Player.js';
import Scene from './Scene.js';

export default class Level extends Scene {
  // The Player
  private player: Player;

  // The enemies and related variables
  private cars: Car[];

  private fov: FovOverlay;

  // Game (needed to switch scenes) // TODO: This may cause a circular dependency, but it'll have to do for now.
  private game: Game;

  /**
   * creating the level
   *
   * @param canvas - the canvas
   * @param game -
   */
  constructor(canvas: HTMLCanvasElement, game: Game) {
    super(canvas);
    this.game = game;

    // Create the player
    this.player = new Player(this.canvas.width / 2, this.canvas.height);


    // At this point I have no idea what I'm doing anymore but I cannot get it to work without resorting to magic number nonsense like this.
    // It's a prototype, it's bound to be botched together, especially given the timeframe.
    // The final game will probably, HOPEFULLY be made with framework or engine more suitable for this sort of thing,
    // After about 6 hours of this stuff I can no longer bring myself to continue. Sorry!
    // - Tim
    // P.S.: I'll see if I can get collision to work tomorrow.
    this.fov = new FovOverlay(0, this.player.getYPos() / 30 - 20); 

    // Creates an array of enemies
    this.cars = [];
    this.cars.push(new Car(125, 5, 'LEFT'));
    this.cars.push(new Car(125, 5, 'LEFT'));
    this.cars.push(new Car(200, 5, 'RIGHT'));
    this.cars.push(new Car(200, 5, 'RIGHT'));

    this.cars.push(new Car(500, 5, 'LEFT'));
    this.cars.push(new Car(500, 5, 'LEFT'));
    this.cars.push(new Car(575, 5, 'RIGHT'));
    this.cars.push(new Car(575, 5, 'RIGHT'));
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order)
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns `true` if the game should stop animation
   */
  public update(elapsed: number): boolean {
    this.handleCollisions();

    this.cars.forEach((car) => {
      car.move();
    });

    return false;
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    this.player.move();
    this.fov.move();  
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Get the canvas rendering context
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.cars.forEach(car => {
      car.draw(ctx);
    });
    ctx.save();
    ctx.translate(this.player.getXPos(), this.player.getYPos());
    ctx.rotate(this.fov.getRotation());
    this.fov.draw(ctx);
    ctx.restore();
   
    
    this.player.draw(ctx);
  }

  /**
   * Creates a new standard enemy
   *
   * @returns A new enemy
   */
  public createCar(yPos: number, xSpeed: number, direction: string): Car {
    console.log('CREATED CAR');

    return new Car(yPos, xSpeed, direction);
  }

  /**
   * Removes an car from the array
   *
   * @param car The car to be removed from the array
   */
  public removeCar(car: Car): void {
    const index = this.cars.indexOf(car);
    this.cars.splice(index, 1);
  }

  /**
   * Handles collisions
   */
  public handleCollisions(): void {
    
  }
}
