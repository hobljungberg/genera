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

        this.canvas = document.createElement('canvas');
        this._gl = this.canvas.getContext('webgl');
        this._pixel = this._gl.createImageData(1,1);

        this.Container.appendChild(this.container);
    }

    setPixel(x, y, c = 0x000000) {
        const color = (new Color(c)).rgba;
    }

}


export default PixelSpace;
