import Graphics from '../Graphics.js';
import KeyListener from '../KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class GameOverScreen extends Scene {
    win;
    constructor(canvas, win) {
        super(canvas);
        this.win = win;
    }
    update(elapsed) {
        return false;
    }
    render() {
        const ctx = this.canvas.getContext('2d');
        if (this.win) {
            Graphics.writeTextToCanvas('Success!', this.canvas.width / 2, this.canvas.height / 2, this.canvas, 50, 'blue');
            Graphics.writeTextToCanvas('Press ENTER to play again', this.canvas.width / 2, this.canvas.height / 2 + 50, this.canvas, 35, 'blue');
        }
        else {
            Graphics.writeTextToCanvas('Failure!', this.canvas.width / 2, this.canvas.height / 2, this.canvas, 50, 'red');
            Graphics.writeTextToCanvas('Press ENTER to try again', this.canvas.width / 2, this.canvas.height / 2 + 50, this.canvas, 35, 'red');
        }
    }
    processInput(game) {
        if (this.keyboard.isKeyDown(KeyListener.KEY_ENTER)) {
            game.setCurrentScene(new Level(this.canvas, game));
        }
    }
}
//# sourceMappingURL=GameOverScreen.js.map