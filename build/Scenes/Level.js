import Car from '../GameObjects/Enemies/Car.js';
import FovOverlay from '../GameObjects/FovOverlay.js';
import Player from '../GameObjects/Player.js';
import GameOverScreen from './GameOverScreen.js';
import Scene from './Scene.js';
export default class Level extends Scene {
    player;
    cars;
    fov;
    game;
    constructor(canvas, game) {
        super(canvas);
        this.game = game;
        this.player = new Player(this.canvas.width / 2, this.canvas.height - 50);
        this.fov = new FovOverlay(0, this.player.getYPos() / 30 - 20);
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
    update(elapsed) {
        this.handleCollisions();
        this.cars.forEach((car) => {
            car.move();
        });
        return false;
    }
    processInput() {
        this.player.move();
        this.fov.move();
    }
    render() {
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
    createCar(yPos, xSpeed, direction) {
        console.log('CREATED CAR');
        return new Car(yPos, xSpeed, direction);
    }
    removeCar(car) {
        const index = this.cars.indexOf(car);
        this.cars.splice(index, 1);
    }
    handleCollisions() {
        this.cars.forEach((car) => {
            if (this.player.collidesWith(car)) {
                console.log('COLLIDED WITH CAR');
                this.game.setCurrentScene(new GameOverScreen(this.canvas, false));
            }
        });
        if (this.player.getYPos() <= 10) {
            this.game.setCurrentScene(new GameOverScreen(this.canvas, true));
        }
        if (this.player.getYPos() > this.canvas.height - this.player.getImageHeight() / 2) {
            this.player.setYPos(this.canvas.height - this.player.getImageHeight() / 2);
        }
    }
}
//# sourceMappingURL=Level.js.map