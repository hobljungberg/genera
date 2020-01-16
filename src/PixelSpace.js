/**
 * PixelSpace
 *
 * Color by pixel.
 */

import Color from './metal/Color';
import ElementSpace from './metal/ElementSpace';


class PixelSpace extends ElementSpace {

    constructor(queryString, width, height) {
        super(queryString, width, height);

        this._canvas = document.createElement('canvas');
        this._context = this._canvas.getContext('2d');
        this._pixel = this._context.createImageData(1,1);

        this._canvas.setAttribute('width', this.width);
        this._canvas.setAttribute('height', this.height);
        this.Container.appendChild(this._canvas);
    }

    setColumn(col = 0, color) {
        for (let row = 0; row < this.height; row++) {
            this.setPixel(col, row, color);
        }
    }

    setPixel(x = 0, y = 0, c = 0x000000) {
        const { r, g, b, a } = (new Color(c)).rgba;

        this._context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        this._context.fillRect(x, y, 1, 1);
    }

    setRow(row = 0, color) {
        for (let col = 0; col < this.width; col++) {
            this.setPixel(col, row, color);
        }
    }

}


export default PixelSpace;
