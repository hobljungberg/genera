/**
 * ImageSpace
 *
 * A space for rendering onto images.
 */

import Jimp from 'jimp';

import PixelSpace from './PixelSpace.js';


class ImageSpace extends PixelSpace {

    constructor(width, height) {
        super(width, height);

        this.image = new Jimp(width, height, 0x000000);
    }

    setPixel(x, y, c) {
        super.setPixel(x, y, c);
        this.image.setPixelColor(c, x, y);
    }

    getPixel(x, y) {
        return super.getPixel(x, y, c);
    }

}


export default ImageSpace;
