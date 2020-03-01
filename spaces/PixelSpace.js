/**
 * PixelSpace
 *
 * Color by pixel.
 */

import Color from '../metal/Color.js';
import Space from '../metal/Space.js';


class PixelSpace extends Space {

    constructor(width, height) {
        super(width, height);

        this._pixels = [[]];
    }

    getPixel(x = 0, y = 0) {
        return this._pixels[x] && this._pixels[x][y] ? this._pixels[x][y] : undefined;
    }

    setColumn(col = 0, color) {
        for (let row = 0; row < this.height; row++) {
            this.setPixel(col, row, color);
        }
    }

    setPixel(x = 0, y = 0, c = 0x000000) {
        if (!this._pixels[x]) {
            this._pixels[x] = [];
        }

        this._pixels[x][y] = c;
    }

    setRow(row = 0, color) {
        for (let col = 0; col < this.width; col++) {
            this.setPixel(col, row, color);
        }
    }

}


export default PixelSpace;
