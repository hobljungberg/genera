/**
 * PixelSpace
 *
 * Color by pixel.
 */

import Color from '../metal/Color';
import ElementSpace from '../metal/Space';


class PixelSpace extends Space {

    constructor(queryString, width, height) {
        super(queryString, width, height);

        this._pixels = [[]];
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
