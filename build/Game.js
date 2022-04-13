import GameLoop from './GameLoop.js';
import TitleScreen from './Scenes/TitleScreen.js';
export default class Game {
    canvas;
    gameloop;
    currentScene;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.currentScene = new TitleScreen(this.canvas);
        console.log('start animation');
        this.gameloop = new GameLoop(this);
        this.gameloop.start();
    }
    getCurrentScene() {
        return this.currentScene;
    }
    setCurrentScene(scene) {
        this.currentScene = scene;
    }
    getCanvasWidth() {
        return this.canvas.width;
    }
    getCanvasHeight() {
        return this.canvas.height;
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static isFullScreen() {
        return window.innerHeight === screen.height;
    }
}
//# sourceMappingURL=Game.js.map