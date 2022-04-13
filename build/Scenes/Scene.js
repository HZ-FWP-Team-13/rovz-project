import KeyListener from '../KeyListener.js';
export default class Scene {
    bgImage;
    keyboard;
    canvas;
    constructor(canvas) {
        this.keyboard = new KeyListener();
        this.canvas = canvas;
    }
}
//# sourceMappingURL=Scene.js.map