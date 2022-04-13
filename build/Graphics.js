export default class Graphics {
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static writeTextToCanvas(text, xCoordinate, yCoordinate, canvas, fontSize = 20, color = 'black', alignment = 'center') {
        const ctx = canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=Graphics.js.map